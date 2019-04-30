<template>
  <v-app>
    <v-toolbar dark color="primary" clipped="true">
      <v-toolbar-side-icon>
        <v-icon>ballot</v-icon>
      </v-toolbar-side-icon>
      <v-toolbar-title class="hidden-xs-only">
        BoardGameDiary
      </v-toolbar-title>
      <v-spacer />
      <div>
        <v-avatar size="40">
          <v-img src="/usericon.png" contain></v-img>
        </v-avatar>
      </div>
    </v-toolbar>
    <div class="record">
      <v-tabs v-model="active_tab" color="primary" dark slider-color="accent">
        <v-tab to="/users">
          <v-icon class="hidden-xs-only">add</v-icon>
          users
        </v-tab>
        <v-tab>
          <v-icon class="hidden-xs-only">add</v-icon>
          title
        </v-tab>
        <v-tab>
          <v-icon class="hidden-xs-only">add</v-icon>
          title
        </v-tab>
        <v-tab>
          <v-icon class="hidden-xs-only">add</v-icon>
          title
        </v-tab>
      </v-tabs>
    </div>
    <nuxt />
    <v-btn color="secondary" dark bottom fixed right fab to="/record">
      <v-icon>add</v-icon>
    </v-btn>
  </v-app>
</template>

<script lang="ts">
export default {
  data() {
    return {
      active_tab: 0,
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'bubble_chart',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
