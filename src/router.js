import Vue from 'vue'
import Router from 'vue-router'
import store from './store/index'

Vue.use(Router)

let router = new Router({
    mode: 'history',
    routes: [
        {
            path: '*',
            name: 'notFoundPage',
            component: () => import('./views/NotFoundPage')
        },
        {
            path: '/',
            name: 'home',
            meta: {
                requiresAuth: true
            },
            component: () => import('./views/Home'),
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('./views/Login')
        },
        {
            path: '/signup',
            name: 'signup',
            component: () => import('./views/SignUp')
        },
        {
            path: '/category/:id',
            name: 'Category',
            meta: {
                requiresAuth: true
            },
            component: () => import('./views/Category'),
            props: true,
        },
    ]
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.isLoggedIn) {
            next()
            return
        }
        next('/login?message=login')
    } else {
        next()
    }
})

export default router