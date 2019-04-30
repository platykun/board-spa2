<template>
  <v-content>
    <div class="container">
      <div class="flex xs12 sm8 offset-sm2">
        <v-text-field
          solo
          label="ユーザ検索"
          prepend-inner-icon="search"
        ></v-text-field>
        <v-card to="/users/1/history" class="ma-2">
          <v-layout>
            <v-flex xs2>
              <v-img src="/usericon.png" contain></v-img>
            </v-flex>
            <v-flex xs10>
              <v-card-text>
                <div>
                  <h4 class="headline">ぷらてぃ君</h4>
                </div>
              </v-card-text>
            </v-flex>
          </v-layout>
        </v-card>
        <v-card to="/users/1/history" class="ma-2">
          <v-layout>
            <v-flex xs2>
              <v-img src="/usericon.png" contain></v-img>
            </v-flex>
            <v-flex xs10>
              <v-card-text>
                <div>
                  <h4 class="headline">ルシファー君</h4>
                </div>
              </v-card-text>
            </v-flex>
          </v-layout>
        </v-card>
        <v-card to="/users/1/history" class="ma-2">
          <v-layout>
            <v-flex xs2>
              <v-img src="/usericon.png" contain></v-img>
            </v-flex>
            <v-flex xs10>
              <v-card-text>
                <div>
                  <h4 class="headline">ほげぴよ</h4>
                </div>
              </v-card-text>
            </v-flex>
          </v-layout>
        </v-card>
      </div>
    </div>
  </v-content>
</template>

<script lang="ts">
export default {}
</script>
