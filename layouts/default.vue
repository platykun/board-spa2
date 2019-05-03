<template>
  <v-app>
    <v-toolbar dark color="primary" clipped="true">
      <v-toolbar-side-icon to="/top">
        <v-icon>ballot</v-icon>
      </v-toolbar-side-icon>
      <v-toolbar-title class="hidden-xs-only">
        BoardGameDiary
      </v-toolbar-title>
      <v-spacer />
      <div>
        <v-avatar size="40" @click.stop="drawer = !drawer">
          <v-img src="/usericon.png" contain></v-img>
        </v-avatar>
      </div>
    </v-toolbar>
    <div class="record">
      <v-tabs color="primary" dark slider-color="accent">
        <v-tab to="/top">
          <v-icon>home</v-icon>
          <div class="hidden-xs-only">top</div>
        </v-tab>
        <v-tab to="/users">
          <v-icon>group</v-icon>
          <div class="hidden-xs-only">users</div>
        </v-tab>
        <v-tab>
          <v-icon class="blue-grey--text text--darken-4">book</v-icon>
          <div class="hidden-xs-only">ボドゲ管理</div>
        </v-tab>
        <v-tab to="/me/update">
          <v-icon>settings</v-icon>
          <div class="hidden-xs-only">設定</div>
        </v-tab>
      </v-tabs>
    </div>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list dense>
        <v-list-tile avatar to="/me">
          <v-list-tile-avatar>
            <v-icon>person</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>{{ name }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <template v-for="(item, index) in items">
          <v-list-tile v-if="item.action" :key="item.title" :to="item.action">
            <!--v-list__tile v-list__tile--link v-list__tile--avatar theme--light-->
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider v-else-if="item.divider" :key="index" />
          <v-subheader v-else-if="item.header" :key="item.header">
            {{ item.header }}
          </v-subheader>
        </template>
      </v-list>
    </v-navigation-drawer>
    <nuxt />
    <v-btn color="accent" dark bottom fixed right fab to="/record">
      <v-icon>add</v-icon>
    </v-btn>
    <BottomNav />
  </v-app>
</template>

<script>
import BottomNav from '../components/BottomNav'

export default {
  components: {
    BottomNav: BottomNav
  },
  data() {
    return {
      active_tab: 0,
      clipped: false,
      drawer: false,
      fixed: false,
      name: '',
      items: [
        { divider: true },
        { action: '/', title: 'ページトップ', icon: 'home' },
        { action: '/login', title: 'ログイン', icon: 'home' },
        { divider: true },
        { header: '記録' },
        { action: '/record', title: '結果入力', icon: 'home' },
        { divider: true },
        { header: 'ユーザ情報' },
        { action: '/users', title: 'ユーザ一覧', icon: 'groups' },
        { divider: true },
        { header: '共有' },
        {
          action: '/share/tweet',
          title: 'ツイート',
          icon: 'record_voice_over'
        },
        { divider: true },
        { header: 'other' },
        {
          action: '/tutorial',
          title: 'チュートリアル',
          icon: 'contact_support'
        },
        { action: '/logout', title: 'ログアウト', icon: 'directions_run' }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  created() {
    this.name = this.$store.getters.name
  },
  methods: {
    showDrawer() {
      this.drawer = true
    }
  }
}
</script>
