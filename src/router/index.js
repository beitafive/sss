import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import store from '../store'

Vue.use(Router)
const route = new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: routes
})
route.beforeEach((to, from, next) => {
    store.dispatch('setNavState', to.meta.showNav || false)
    next()
    // ...
})
export default route
