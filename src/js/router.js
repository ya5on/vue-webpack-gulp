import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home'
import notFound from './views/404'

Vue.use(Router);

export default new Router({
    // mode: 'history',
    routes: [
        {
            path: '*',
            name: 'notFound',
            component: notFound
        },
        {
            path: '/',
            name: 'home',
            component: Home
        },

    ]
})