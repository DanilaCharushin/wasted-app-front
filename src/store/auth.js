import axios from 'axios'
import {server_path} from "@/local_settings";


export default {
    actions: {
        async login({commit}, data) {
            try {
                return await new Promise((resolve, reject) => {
                    commit('auth_request')
                    axios.post(server_path + "/accounts/login/",
                        data,
                        {
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        })
                        .then(resp => {
                            const dataInResponse = resp.data.data
                            console.log(resp)
                            console.log(dataInResponse)
                            const token = dataInResponse.token
                            const user = dataInResponse.user
                            const permission = user['permission']
                            localStorage.setItem('token', token)
                            localStorage.setItem('inn', user['username'])
                            localStorage.setItem('permission', permission)
                            axios.defaults.headers.common['Authorization'] = 'auth' + token
                            commit('auth_success', token, user)
                            resolve(resp)
                        })
                        .catch(err => {
                            commit('auth_error')
                            console.log('remove')
                            localStorage.clear()
                            reject(err)
                        })
                })
            } catch (e) {
                console.log(e)
            }
        },
        async logout({commit}) {
            return await new Promise((resolve) => {
                commit('logout')
                console.log('logout')
                localStorage.clear()
                delete axios.defaults.headers.common['Authorization']
                resolve()
            })
        }
    }
}