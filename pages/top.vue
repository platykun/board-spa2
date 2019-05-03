<template>
  <div class="container">
    <div class="flex xs12 sm8 offset-sm2">
      <v-card v-for="record in records" :key="record" to="" class="ma-2">
        <v-layout align-center>
          <v-flex xs2>
            <userIcon :userid="record.user.id"></userIcon>
          </v-flex>
          <v-flex xs10>
            <v-card-text>
              <h3 class="headline primary--text">
                {{ record.boardGame.name }}
              </h3>
              <h4 class="secondary--text">{{ record.user.name }}</h4>
              <h4 class="secondary--text">
                {{ record.createAt.seconds | moment }}
              </h4>
            </v-card-text>
          </v-flex>
        </v-layout>
      </v-card>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import FirestoreCollections from '../plugins/firestoreCollections'
import userIcon from '~/components/atoms/userIcon'

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
