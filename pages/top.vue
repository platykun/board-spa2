<template>
  <div class="container">
    <div class="flex xs12 sm8 offset-sm2">
      <h2>トップ画面</h2>
      <v-card v-for="record in records" :key="record" to="" class="ma-2">
        <v-layout>
          <v-flex xs2>
            <v-img src="/usericon.png" contain></v-img>
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
</template>

<script>
import FirestoreCollections from '../plugins/firestoreCollections'

export default {
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
