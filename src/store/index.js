import { createStore } from 'vuex'
import auth from "@/store/auth";

export default createStore({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user: {},
    error: null,
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    error: state => state.error,
    username: state => state.user['username'],
  },
  mutations: {
    auth_request(state) {
      state.status = 'loading'
    },
    auth_success(state, token, user) {
      state.status = 'success'
      state.token = token
      state.user = user
    },
    auth_error(state) {
      state.status = 'error'
    },
    logout(state) {
      state.status = ''
      state.token = ''
      state.user = {}
    },
    setError(state, error) {
      state.error = error
    },
    clearError(state) {
      state.error = null
    }
  },
  actions: {
  },
  modules: {
    auth
  }
})
