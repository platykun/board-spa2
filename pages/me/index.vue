<template>
  <v-content>
    <div class="container">
      <h2>ユーザ情報更新</h2>
    </div>
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
    </v-flex>
  </v-content>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: '',
      imageName: '',
      boardgame: '',
      boardgames: ['hoge', 'piyo']
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
    }
  }
}
</script>
