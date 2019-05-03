<template>
  <div class="container">
    <div class="flex xs12 sm8 offset-sm2">
      <v-alert v-model="show" type="warning" icon="info"
        >ここにエラーメッセージが入る
      </v-alert>
    </div>
    <v-card color="blue-grey lighten-4" class="white--text">
      <v-card-title>
        <h2>ユーザ作成</h2>
      </v-card-title>
      <v-card-text>
        <v-text-field v-model="email" label="email" type="text"></v-text-field>
        <v-text-field
          v-model="name"
          label="ユーザ名"
          type="text"
        ></v-text-field>
        <v-text-field
          v-model="password"
          label="パスワード"
          type="password"
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-layout>
          <v-spacer />
          <v-btn class="primary" dark @click.stop="signup()">
            ユーザ作成
          </v-btn>
        </v-layout>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import firebase from '../plugins/firebase'
import { UserDto } from '../plugins/gateway/user/UserDto'
import { UserUsecase } from '../plugins/usecase/UserUsecase'

export default {
  layout: 'initial',
  data() {
    return {
      email: '',
      name: '',
      password: ''
    }
  },
  mounted() {
    firebase.auth().onAuthStateChanged(user => {
      // this.setUser(user)
    })
  },
  methods: {
    signup() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(userCredential => {
          // ユーザ情報をfirebase側にも登録する
          const userDto = new UserDto(this.email, this.name, '', this.email)
          UserUsecase.addLoginUser(userDto)

          // TODO ログイン時のものと同一なので共通化を検討する
          firebase
            .auth()
            .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
            .then(
              firebase
                .auth()
                .signInWithEmailAndPassword(this.email, this.password)
                .then(userCredential => {
                  // ログインユーザのデフォルト情報をvuexに格納する
                  // TODO 外出し
                  this.$store.dispatch('updateUserDetail', {
                    id: this.email,
                    name: this.name,
                    image: '',
                    email: this.email
                  })

                  this.$router.push('/top')
                })
                .catch(error => {
                  alert(error)
                })
            )
        })
        .catch(error => {
          alert(error)
        })
    }
  }
}
</script>
