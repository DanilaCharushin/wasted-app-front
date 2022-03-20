import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import store from './store/index'
import Loader from "@/components/Loader"
import messagePlugin from '@/utils/message-plugin.js'
import './quasar'
import 'materialize-css/dist/js/materialize.min.js'
import Axios from 'axios'


Vue.prototype.$http = Axios;
const token = localStorage.getItem('token')

if (token) {
    Vue.prototype.$http.defaults.headers.common['Authorization'] = 'Bearer' + token
}


Vue.config.productionTip = false
Vue.component('Loader', Loader)
Vue.use(messagePlugin)


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
