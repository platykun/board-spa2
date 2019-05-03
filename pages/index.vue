<template>
  <v-content>
    <section>
      <v-parallax src="/index_background.jpg">
        <v-layout column align-center justify-center class="white--text">
          <img src="/logo.png" height="200" />
          <h1 class="white--text mb-2 display-1 text-xs-center">
            Board Game Management
          </h1>
          <div class="subheading mb-3 text-xs-center">
            遊んだボードゲームを記録するwebアプリケーション
          </div>
          <v-btn class="accent mt-2" dark large to="/signup">
            新規登録
          </v-btn>
          <v-btn class="mt-2" large to="/login">
            <v-icon>sign-in</v-icon>
            ログイン
          </v-btn>
        </v-layout>
      </v-parallax>
    </section>
    <div class="container">
      <div class="flex xs12 sm8 offset-sm2">
        <h2>履歴</h2>
        <v-card v-for="record in records" :key="record" to="" class="ma-2">
          <v-layout>
            <v-flex xs2>
              <userIcon :userid="record.user.id"></userIcon>
            </v-flex>
            <v-flex xs10>
              <v-card-text>
                <div>
                  <h4 class="headline">{{ record.user.name }}</h4>
                </div>
                <div>
                  <h4 class="headline">{{ record.boardGame.name }}</h4>
                </div>
                <div>
                  <span class="grey--text">2019/04/29</span>
                </div>
                <v-spacer />
                <div>
                  <h4 class="grey--text">場所</h4>
                </div>
              </v-card-text>
            </v-flex>
          </v-layout>
        </v-card>
      </div>
    </div>
  </v-content>
</template>

<script>
import FirestoreCollections from '../plugins/firestoreCollections'
import userIcon from '~/components/atoms/userIcon'

export default {
  components: {
    userIcon: userIcon
  },
  data() {
    return {
      records: [],
      boardGame: '',
      user: ''
    }
  },
  created() {
    const recordCollections = FirestoreCollections.records()

    recordCollections.get().then(querySnapshot => {
      querySnapshot.forEach(recordSnapshot => {
        // @ts-ignore
        this.records.push(recordSnapshot.data())
      })
    })
  }
}
</script>
