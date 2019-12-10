import Vue from 'vue'
import Router from 'vue-router'
import regester from './views/regester.vue'
import home from './views/home.vue'
import HRregester from './views/HRregester.vue'
import grzx from './views/grzx.vue'
import logins from './views/logins.vue'
import joplogin from './views/joplogin.vue'
import jopgrzx from './views/jopgrzx.vue'
import rencai from './views/rencai'
import zhiwei from './views/zhiwei.vue'
import Post from './views/post.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/Post',
            name: 'Post',
            component: Post,
            children: []
        },
        {
            path: '/',
            name: 'home',
            component: home,
            children: []
        },
        {
            path: '/rencai',
            name: 'rencai',
            component: rencai,
            children: []
        },
        {
            path: '/zhiwei',
            name: 'zhiwei',
            component: zhiwei,
            children: []
        },
        {
            path: '/grzx',
            name: 'grzx',
            component: grzx,
            children: []
        },
        {
            path: '/logins',
            name: 'logins',
            component: logins,
            children: []
        }, {
            path: '/jopgrzx',
            name: 'jopgrzx',
            component: jopgrzx,
            children: []
        },
        {
            path: '/joplogin',
            name: 'joplogin',
            component: joplogin,
            children: []
        },
        {
            path: '/regester',
            name: 'regester',
            component: regester,
            children: []

        }, {
            path: '/HRregester',
            name: 'HRregester',
            component: HRregester,
            children: []
        },


    ]
})