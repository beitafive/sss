import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    show_nav: '',
    userInfo: {},
    location: '',
  },
  getters: {
    mine (state) {
      return state.userInfo
    },
    location (state) {
      return state.location
    },
    show_nav (state) {
      return state.show_nav
    }
  },
  mutations: {
    setUserInfo ( state, data ) {
      state.userInfo = data
    },
    setLocation ( state, data ) {
      state.location = data
    },
    setNavState (state, data) {
      state.show_nav = data
    }
  },
  actions: {
    setUserInfo ( {commit}, data ) {
      commit('setUserInfo', data)
    },
    setLocation ( {commit}, data ) {
      commit('setLocation', data)
    },
    setNavState ( {commit}, data) {
      commit('setNavState', data)
    }
  }
})
