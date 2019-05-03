<template>
  <v-app>
    <v-toolbar dark color="primary" clipped="true">
      <v-toolbar-side-icon to="/">
        <v-icon>ballot</v-icon>
      </v-toolbar-side-icon>
      <v-toolbar-title class="hidden-xs-only">
        BoardGameDiary
      </v-toolbar-title>
    </v-toolbar>
    <nuxt />
    <BottomNav />
  </v-app>
</template>

<script>
import BottomNav from '../components/BottomNav'

export default {
  components: {
    BottomNav: BottomNav
  }
}
</script>
