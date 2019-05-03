<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-content>
    <div class="container">
      <h2>記録</h2>
      <v-layout>
        <v-spacer />
        <v-dialog v-model="dialog" persistent max-width="600px">
          <template v-slot:activator="{ on }">
            <v-btn class="secondary" v-on="on">
              <v-icon>add</v-icon>
              ボードゲームの追加
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">ボードゲームの追加</span>
            </v-card-title>
            <v-card-text>
              <v-text-field
                v-model="submitBoardGameName"
                outline
                label="ボードゲーム名"
                required
              ></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn flat @click="dialog = false">閉じる</v-btn>
              <v-btn color="accent" dark @click="submitBoardGame">登録</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-layout>
      <v-autocomplete
        ref="boardgame-name"
        v-model="boardgame"
        outline
        :items="updateBoardgameList"
        label="ボードゲーム"
        placeholder="Select..."
        required
      ></v-autocomplete>
      <v-textarea
        v-model="comment"
        outline
        name="comment"
        label="コメント"
        value=""
      ></v-textarea>
      <h3>評価 (未実装)</h3>
      <div>
        <v-icon color="accent">grade</v-icon>
        <v-icon>grade</v-icon>
        <v-icon>grade</v-icon>
        <v-icon>grade</v-icon>
        <v-icon>grade</v-icon>
      </div>
      <v-layout>
        <v-spacer />
        <v-btn class="accent" dark @click.stop="submitRecord()">
          <v-icon>add</v-icon>
          記録
        </v-btn>
      </v-layout>
    </div>
  </v-content>
</template>

<script>
import { UserUsecase } from '../../plugins/usecase/UserUsecase'
import { BoardgameUsecase } from '../../plugins/usecase/BoardgameUsecase'
import { RecordUsecase } from '../../plugins/usecase/RecordUsecase'
import { RecordDto } from '../../plugins/gateway/record/RecordDto'

export default {
  data() {
    return {
      stars: '1',
      boardgame: '',
      comment: '',
      boardgames: [],
      loginUserSnapshot: [],
      boardgameSnapshot: [],
      dialog: false,
      submitBoardGameName: ''
    }
  },
  computed: {
    updateBoardgameList() {
      const boardgames = []
      this.boardgameSnapshot.forEach(b => boardgames.push(b.data().name))
      return boardgames
    }
  },
  created() {
    const loginEmail = this.$store.getters.email
    this.loginUserSnapshot = UserUsecase.findUserByEmail(loginEmail)
    this.boardgameSnapshot = BoardgameUsecase.findAll()
    for (const boardgameRef in this.boardgameSnapshot) {
      this.boardgames.add(boardgameRef.data().name)
    }
  },
  methods: {
    submitRecord() {
      // 選択されたボードゲームのオブジェクトを取得する
      const boardGameRef = this.boardgameSnapshot.filter(
        b => b.data().name === this.boardgame
      )[0]

      // 結果コレクションに登録
      const result = new RecordDto(
        boardGameRef,
        this.boardgame,
        this.loginUserSnapshot[0],
        this.loginUserSnapshot[0].data().id,
        this.loginUserSnapshot[0].data().name,
        this.comment,
        this.stars,
        new Date()
      )

      RecordUsecase.record(result).then(record => {
        UserUsecase.record(
          this.$store.getters.id,
          boardGameRef.data().name,
          boardGameRef.ref,
          record
        )
      })

      this.$router.push('/top')
    },
    submitBoardGame() {
      BoardgameUsecase.submit(this.submitBoardGameName).then(record => {
        this.dialog = false
        this.boardgameSnapshot = BoardgameUsecase.findAll()
        for (const boardgameRef in this.boardgameSnapshot) {
          this.boardgames.add(boardgameRef.data().name)
        }
        this.boardgame = this.submitBoardGameName
      })
    }
  }
}
</script>
