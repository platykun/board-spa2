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
          :to="userHistoryUrl(user)"
          class="ma-2"
        >
          <v-layout>
            <v-flex xs2>
              <userIcon :userid="user.id"></userIcon>
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
import { UserUsecase } from '../../plugins/usecase/UserUsecase'
import userIcon from '~/components/atoms/userIcon'

export default {
  components: {
    userIcon: userIcon
  },
  data() {
    return {
      userSnapshotList: [] // 最新状態はここにコピーされる
    }
  },
  computed: {
    userList() {
      return this.userSnapshotList.map(u => u.data())
    }
  },
  created() {
    this.userSnapshotList = UserUsecase.findAll()
  },
  methods: {
    userHistoryUrl(user) {
      return '/users/' + user.id + '/history'
    }
  }
}
</script>
