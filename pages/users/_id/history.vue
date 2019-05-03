<template>
  <v-content>
    <div class="container">
      <v-card to="" class="ma-2">
        <v-layout>
          <v-flex xs2>
            <userIcon :userid="id"></userIcon>
          </v-flex>
          <v-flex xs10>
            <v-card-text>
              <div>
                <h4 class="headline">name:{{ name }}</h4>
                <h4 class="headline">email: {{ email }}</h4>
              </div>
            </v-card-text>
          </v-flex>
        </v-layout>
      </v-card>
      <h2>履歴</h2>
      <v-card v-for="record in records" :key="record" to="" class="ma-2">
        <v-layout>
          <v-flex xs12>
            <v-card-text>
              <div>
                <h4 class="headline">{{ record.boardGameName }}</h4>
              </div>
              <div>
                <span class="grey--text">{{
                  record.recordDate.seconds | moment
                }}</span>
              </div>
            </v-card-text>
          </v-flex>
        </v-layout>
      </v-card>
    </div>
  </v-content>
</template>

<script>
import FirestoreCollections from '~/plugins/firestoreCollections'
import userIcon from '~/components/atoms/userIcon'
import moment from 'moment'

export default {
  components: {
    userIcon: userIcon
  },
  filters: {
    moment: function(date) {
      return moment(date * 1000).format('YYYY-MM-DD HH:mm')
    }
  },
  data() {
    return {
      id: this.$nuxt.$route.params.id,
      name: '',
      email: '',
      image: '',
      records: []
    }
  },
  created() {
    FirestoreCollections.users()
      .doc(this.id)
      .get()
      .then(user => {
        this.name = user.data().name
        this.email = user.data().email
      })

    FirestoreCollections.users()
      .doc(this.id)
      .collection('records')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(recordSnapshot => {
          this.records.push(recordSnapshot.data())
        })
      })
  }
}
</script>
