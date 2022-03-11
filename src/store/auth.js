import axios from 'axios'
import {server_path} from "@/local_settings";


export default {
    actions: {
        async login({commit}, data) {
            try {
                return await new Promise((resolve, reject) => {
                    commit('auth_request')
                    axios.post(server_path + "/login/",
                        data,
                        {
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        })
                        .then(resp => {
                            console.log(resp)
                            const dataInResponse = resp.data.data
                            const token = dataInResponse.token
                            const user = dataInResponse.user
                            localStorage.setItem('token', token)
                            axios.defaults.headers.common['Authorization'] = token
                            commit('auth_success', token, user)
                            resolve(dataInResponse)
                        })
                        .catch(err => {
                            commit('auth_error')
                            localStorage.clear()
                            commit('logout')
                            reject(err)
                        })
                })
            } catch (e) {
                commit('setError', e)
                throw e
            }
        },
        async logout({commit}) {
            return await new Promise((resolve) => {
                commit('logout')
                localStorage.clear()
                delete axios.defaults.headers.common['Authorization']
                resolve()
            })
        }
    }
}