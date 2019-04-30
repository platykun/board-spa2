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
        <v-text-field label="ユーザID" type="text"></v-text-field>
        <v-text-field label="パスワード" type="password"></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-layout>
          <v-spacer />
          <v-btn to="/top" class="primary" dark>
            ログイン
          </v-btn>
        </v-layout>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script lang="ts">
export default {
  data: () => ({
    show: true
  })
}
</script>
