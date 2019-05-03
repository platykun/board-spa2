<template>
  <v-img :src="url" contain></v-img>
</template>

<script>
import firebase from '~/plugins/firebase'

export default {
  props: {
    userid: {
      type: String,
      default: 'default.png',
      required: false
    }
  },
  data() {
    return {
      url: ''
    }
  },
  watch: {
    userid() {
      // urlに画像URLを格納する
      firebase
        .storage()
        .ref('icons/' + this.userid)
        .getDownloadURL()
        .then(url => {
          this.url = url
        })
        .catch(e => {
          // 画像が取得できなかった場合、デフォルトの画像を取得する
          firebase
            .storage()
            .ref('icons/' + 'default.png')
            .getDownloadURL()
            .then(url => {
              this.url = url
            })
        })
    }
  },
  mounted() {
    // urlに画像URLを格納する
    firebase
      .storage()
      .ref('icons/' + this.userid)
      .getDownloadURL()
      .then(url => {
        this.url = url
      })
      .catch(e => {
        // 画像が取得できなかった場合、デフォルトの画像を取得する
        firebase
          .storage()
          .ref('icons/' + 'default.png')
          .getDownloadURL()
          .then(url => {
            this.url = url
          })
      })
  }
}
</script>

<style></style>
