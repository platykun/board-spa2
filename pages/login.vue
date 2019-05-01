<template>
  <div class="container">
    <div class="flex xs12 sm8 offset-sm2">
      <v-alert v-model="show" type="warning" icon="info"
        >ここにエラーメッセージが入る
      </v-alert>
    </div>
    <v-card color="blue-grey lighten-4" class="white--text">
      <v-card-title>
        <h2>ログイン</h2>
      </v-card-title>
      <v-card-text>
        <v-text-field v-model="email" label="email" type="text"></v-text-field>
        <v-text-field
          v-model="password"
          label="パスワード"
          type="password"
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-layout>
          <v-spacer />
          <v-btn class="primary" dark @click.stop="login()">
            ログイン
          </v-btn>
        </v-layout>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import firebase from '../plugins/firebase'

export default {
  data() {
    return {
      show: true,
      email: '',
      password: ''
    }
  },
  mounted() {
    firebase.auth().onAuthStateChanged(user => {
      // this.setUser(user)
    })
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(userCredential => {
          // ログインしたら飛ぶページを指定
          console.log(userCredential)
          console.log(userCredential.user.getIdTokenResult(false).token)
          this.$router.push('/top')
        })
        .catch(error => {
          alert(error)
        })
    }
  }
}
</script>
