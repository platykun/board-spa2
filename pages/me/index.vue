<template>
  <v-content>
    <div class="container">
      <h2>ユーザ情報更新</h2>
      {{ url }}
    </div>
    <userIcon userid=""></userIcon>
    <img v-if="imageUrl" :src="imageUrl" height="150" />
    <v-img :src="url" contain></v-img>
    <v-btn @click.stop="getIcon()"></v-btn>
  </v-content>
</template>

<script>
import userIcon from '~/components/atoms/userIcon'

export default {
  components: {
    userIcon: userIcon
  },
  data() {
    return {
      url: '',
      imageUrl: ''
    }
  },
  methods: {
    getIcon() {
      // const firebaseStorage = firebase.storage()
      //
      // this.url = firebaseStorage
      //   .ref('icons/' + 'nagonago561@yahoo.co.jp')
      //   .getDownloadURL()
      //   .then(url => {
      //     this.url = url.toString()
      //   })
    }
  }
}
</script>
