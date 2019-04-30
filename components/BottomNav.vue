<template>
  <v-bottom-nav value="true" color="primary">
    <template v-for="navBottom in navBottoms">
      <v-btn :key="navBottom.name" :to="navBottom.link" dark>
        <span>{{ navBottom.name }}</span>
        <v-icon dark>
          {{ navBottom.icon }}
        </v-icon>
      </v-btn>
    </template>
  </v-bottom-nav>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class BottomNav extends Vue {
  /** data */
  navBottoms: { name: string; icon: string; link: string }[] = [
    {
      name: 'add',
      icon: 'add',
      link: 'https://google.com'
    },
    {
      name: 'add',
      icon: 'add',
      link: 'https://google.com'
    }
  ]
}
</script>

<style></style>
