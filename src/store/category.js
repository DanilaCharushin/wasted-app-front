import axios from 'axios'
import {server_path} from "@/local_settings";


export default {
    state: {
        categories: [],
        categoryGroups: [],
    },
    mutations: {
        setCategories(state, categories) {
            state.categories = categories
        },
        setCategoryGroups(state, categoryGroups) {
            state.categoryGroups = categoryGroups
        },
    },
    getters: {
        categories: state => state.categories,
        categoryGroups: state => state.categoryGroups,
    },
    actions: {
        async allCategoryGroups({commit}) {
            try {
                return await new Promise((resolve, reject) => {
                    axios.get(server_path + "/categories_groups/",
                        {
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        })
                        .then(resp => {
                            commit('setCategoryGroups', resp.data)
                            resolve(resp.data)
                        })
                        .catch(err => {
                            reject(err)
                        })
                })
            } catch (e) {
                commit('setError', e)
                throw e
            }
        },
        async allCategories({commit}) {
            try {
                const token = localStorage.getItem('token')
                return await new Promise((resolve, reject) => {
                    axios.get(server_path + "/categories/",
                        {
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': 'Bearer ' + token,
                            }
                        })
                        .then(resp => {
                            commit('setCategories', resp.data)
                            resolve(resp.data)
                        })
                        .catch(err => {
                            reject(err)
                        })
                })
            } catch (e) {
                commit('setError', e)
                throw e
            }
        },
        async createCategory({commit}, data) {
            try {
                const token = localStorage.getItem('token')
                return await new Promise((resolve, reject) => {
                    axios.post(server_path + "/categories/",
                        data,
                        {
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': 'Bearer ' + token,
                            }
                        })
                        .then(resp => {
                            resolve(resp.data)
                        })
                        .catch(err => {
                            reject(err)
                        })
                })
            } catch (e) {
                commit('setError', e)
                throw e
            }
        },
        async deleteCategory({commit}, id) {
            try {
                const token = localStorage.getItem('token')
                return await new Promise((resolve, reject) => {
                    axios.delete(server_path + "/categories/",
                        {
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': 'Bearer ' + token,
                            },
                            data: {
                                id: id
                            }
                        })
                        .then(resp => {
                            resolve(resp.data)
                        })
                        .catch(err => {
                            reject(err)
                        })
                })
            } catch (e) {
                commit('setError', e)
                throw e
            }
        },
    }
}