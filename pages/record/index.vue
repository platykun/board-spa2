<template>
  <v-content>
    <div class="container">
      <h2>記録</h2>
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
      <h3>評価</h3>
      <div>
        <v-icon color="amber lighten-1">grade</v-icon>
        <v-icon>grade</v-icon>
        <v-icon>grade</v-icon>
        <v-icon>grade</v-icon>
        <v-icon>grade</v-icon>
      </div>
      <v-layout>
        <v-spacer />
        <v-btn class="primary" dark @click.stop="submitRecord()">
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
      boardgames: ['hoge', 'piyo'],
      loginUserSnapshot: [],
      boardgameSnapshot: []
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
    // TODO 以下べたがきされているメールアドレスはログイン時のものを利用
    this.loginUserSnapshot = UserUsecase.findUserByEmail(
      'nagonago561@yahoo.co.jp'
    )
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

      const result = new RecordDto(
        boardGameRef,
        this.boardgame,
        this.loginUserSnapshot[0],
        this.loginUserSnapshot[0].data().name,
        this.comment,
        this.stars,
        new Date()
      )
      RecordUsecase.record(result)
      // RecordUsecase.ts.record()
      // const records = FirestoreCollections.records()
      //
      // records.add({
      //   name: 'Tokyo',
      //   country: 'Japan'
      // })
      this.$router.push('/top')
    }
  }
}
</script>
