<template>
  <v-content>
    <div class="container">
      <div class="flex xs12 sm8 offset-sm2">
        <v-text-field
          solo
          label="ユーザ検索"
          prepend-inner-icon="search"
        ></v-text-field>
        <v-card
          v-for="user in userList"
          :key="user"
          to="/users/1/history"
          class="ma-2"
        >
          <v-layout>
            <v-flex xs2>
              <v-img :src="user.image" contain></v-img>
            </v-flex>
            <v-flex xs10>
              <v-card-text>
                <div>
                  <h4 class="headline">{{ user.name }}</h4>
                </div>
              </v-card-text>
            </v-flex>
          </v-layout>
        </v-card>
      </div>
    </div>
  </v-content>
</template>

<script>
import FirestoreCollections from '../../plugins/firestoreCollections'

export default {
  data() {
    return {
      userList: [] // 最新状態はここにコピーされる
    }
  },
  created() {
    const users = FirestoreCollections.users()
    users.get().then(querySnapshot => {
      querySnapshot.forEach(userSnapshot => {
        const user = {
          id: userSnapshot.data().id,
          name: userSnapshot.data().name,
          email: userSnapshot.data().email,
          image: '/usericon.png'
        }
        this.userList.push(user)
      })
    })
  }
}
</script>
