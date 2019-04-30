<template>
  <v-content>
    <div class="container">
      <h2>記録</h2>
      <v-autocomplete
        ref="boardgame-name"
        v-model="boardgame"
        outline
        :items="boardgames"
        label="ボードゲーム"
        placeholder="Select..."
        required
      ></v-autocomplete>
      <v-textarea outline name="comment" label="コメント" value=""></v-textarea>
      <h3>評価</h3>
      <div>
        <v-icon color="amber lighten-1">star</v-icon>
        <v-icon>star</v-icon>
        <v-icon>star</v-icon>
        <v-icon>star</v-icon>
        <v-icon>star</v-icon>
      </div>
      <v-layout>
        <v-spacer />
        <v-btn to="/top" class="primary" dark>
          <v-icon>add</v-icon>
          記録
        </v-btn>
      </v-layout>
    </div>
  </v-content>
</template>

<script>
export default {
  data() {
    return {
      boardgame: '',
      boardgames: ['hoge', 'piyo']
    }
  }
}
</script>
