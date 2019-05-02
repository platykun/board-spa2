export const state = () => ({
  id: '',
  name: '',
  image: '',
  email: ''
})

export const getters = {
  id(state) {
    return state.id
  },
  name(state) {
    return state.name
  },
  image(state) {
    return state.image
  },
  email(state) {
    return state.email
  }
}

export const mutations = {
  setDetail(state, { id, name, image, email }) {
    state.id = id
    state.name = name
    state.image = image
    state.email = email
  }
}

export const actions = {
  updateUserDetail({ commit }, { id, name, image, email }) {
    commit('setDetail', { id, name, image, email })
  },
  clearUserDetail({ commit }) {
    commit('setDetail', { id: '', name: '', image: '', email: '' })
  }
}
