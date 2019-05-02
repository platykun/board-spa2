<template>
  <v-content>
    <div class="container">
      <h2>ユーザ情報更新画面</h2>
      <h4>アイコン画像の更新</h4>
      <v-flex
        xs12
        class="text-xs-center text-sm-center text-md-center text-lg-center"
      >
        <img v-if="imageUrl" :src="imageUrl" height="150" />
        <v-text-field
          v-model="imageName"
          label="Select Image"
          prepend-icon="attach_file"
          @click="pickFile"
        ></v-text-field>
        <input
          ref="image"
          type="file"
          style="display: none"
          accept="image/*"
          @change="onFilePicked"
        />
        <v-layout>
          <v-spacer />
          <v-btn class="accent" dark @click.stop="submitImage">更新</v-btn>
        </v-layout>
      </v-flex>
      <h4>ユーザ名の更新</h4>
      <v-text-field label="ユーザ名"></v-text-field>
      <v-layout>
        <v-spacer />
        <v-btn class="secondary" dark>未実装</v-btn>
      </v-layout>
    </div>
  </v-content>
</template>

<script>
import firebase from 'firebase'

export default {
  data() {
    return {
      imageUrl: '',
      imageName: '',
      imageFile: ''
    }
  },
  methods: {
    pickFile() {
      this.$refs.image.click()
    },
    onFilePicked(e) {
      const files = e.target.files
      if (files[0] !== undefined) {
        this.imageName = files[0].name
        if (this.imageName.lastIndexOf('.') <= 0) {
          return
        }
        const fr = new FileReader()
        fr.readAsDataURL(files[0])
        fr.addEventListener('load', () => {
          this.imageUrl = fr.result
          this.imageFile = files[0] // this is an image file that can be sent to server...
        })
      } else {
        this.imageName = ''
        this.imageFile = ''
        this.imageUrl = ''
      }
    },
    submitImage() {
      // cloud firestoreに格納する
      const storageRef = firebase.storage().ref()
      const loginUserId = this.$store.getters.id

      const loginUserIconRef = storageRef.child('icons/' + loginUserId)

      loginUserIconRef.put(this.imageFile).then(function(snapshot) {
        console.log('Uploaded a blob or file!')
      })
    }
  }
}
</script>
