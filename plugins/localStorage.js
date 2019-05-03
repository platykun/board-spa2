import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  createPersistedState({
    key: 'index',
    paths: ['email', 'id', 'image', 'name']
  })(store)
}
