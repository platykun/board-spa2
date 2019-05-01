<template>
  <div class="container">
    <div class="flex xs12 sm8 offset-sm2">
      <h2>トップ画面</h2>
      <v-card to="" class="ma-2">
        <v-layout>
          <v-flex xs2>
            <v-img src="/usericon.png" contain></v-img>
          </v-flex>
          <v-flex xs10>
            <v-card-text>
              <div>
                <h4 class="headline">名前</h4>
              </div>
              <div>
                <h4 class="headline">ボードゲーム名</h4>
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
      <v-card to="" class="ma-2">
        <v-layout>
          <v-flex xs2>
            <v-img src="/usericon.png" contain></v-img>
          </v-flex>
          <v-flex xs10>
            <v-card-text>
              <div>
                <h4 class="headline">名前</h4>
              </div>
              <div>
                <h4 class="headline">ボードゲーム名</h4>
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
      <v-card to="" class="ma-2">
        <v-layout>
          <v-flex xs2>
            <v-img src="/usericon.png" contain></v-img>
          </v-flex>
          <v-flex xs10>
            <v-card-text>
              <div>
                <h4 class="headline">名前</h4>
              </div>
              <div>
                <h4 class="headline">ボードゲーム名</h4>
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
    <div>{{ list }} user: {{ user }} boardGame: {{ boardGame }}</div>
  </div>
</template>

<script>
import firebase from '../plugins/firebase'

export default {
  data() {
    return {
      list: [], // 最新状態はここにコピーされる
      boardGame: '',
      user: ''
    }
  },
  created() {
    const users = firebase.firestore().collection('records')
    users.get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        // ボードゲームの参照を取得
        // doc
        //   .data()
        //   .boardGameSnapshot.get()
        //   .then(boardGameSnapshot => {
        //     this.boardGame = boardGameSnapshot.data()
        //   })
        // const record = {
        //   boardGame: this.boardGame,
        //   comment: doc.data().comment
        // }
        // this.list.push(record)
        // this.user = doc
        //   .data()
        //   .user.get()
        //   .then(ref => {
        //     this.user = ref.data().name
        //   })
      })
    })
  }
}
</script>
