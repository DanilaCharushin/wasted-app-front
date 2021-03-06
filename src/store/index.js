import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import category from "@/store/category";
import waste from "@/store/waste";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        status: '',
        token: localStorage.getItem('token') || '',
        user: {},
        error: null,
        permission: ''
    },
    mutations: {
        auth_request(state) {
            state.status = 'loading'
        },
        auth_success(state, token, user, permission) {
            state.status = 'success'
            state.token = token
            state.user = user
            state.permission = permission
        },
        auth_error(state) {
            state.status = 'error'
        },
        logout(state) {
            state.status = ''
            state.token = ''
            state.user = {}
            state.permission = ''
        },
        setError(state, error) {
            state.error = error
        },
        clearError(state) {
            state.error = null
        }
    },
    getters: {
        isLoggedIn: state => !!state.token,
        authStatus: state => state.status,
        error: state => state.error,
        username: state => state.user['username'],
        permission: state => state.permission
    },
    modules: {
        auth, category, waste
    }
})
