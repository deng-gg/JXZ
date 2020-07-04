import Vue from 'vue'
import Router from 'vue-router'
import regester from '../views/regester.vue'
import home from '../views/Home.vue'
import HRregester from '../views/HRregester.vue'
import grzx from '../views/grzx.vue'
import hrLogin from '../views/hrLogin.vue'
import joplogin from '../views/joplogin.vue'
import jopgrzx from '../views/jopgrzx.vue'
import rencai from '../views/rencai'
import zhiwei from '../views/zhiwei.vue'
import Post from '../views/post.vue'
import vuex from '../views/vuex.vue'
import Detail from '../views/Detail.vue'
import VueCookies from 'vue-cookies'
import four from '../views/four.vue'

Vue.use(Router)

const router = new Router({
        //mode: 'hash', // 
        //base: process.env.BASE_URL,
        mode: 'history', // 详情页面刷新不再空白，去掉路由的#
        routes: [{
                path: '/Post',
                name: 'Post',
                component: Post,
                children: [],

            },
            {
                path: '/Detail/:id',
                name: 'Detail',
                component: Detail,
                children: []
            },
            {
                path: '/',
                name: 'home',
                component: home,
                children: [],
            },
            {
                path: '/rencai',
                name: 'rencai',
                component: rencai,
                beforeEnter: (to, from, next) => {
                    if (VueCookies.isKey("cookieName")) {
                        next()
                    } else {
                        alert("登录后的hr才能查看哦")
                        next('/hrLogin')
                    }
                }
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
                path: '/hrLogin',
                name: 'hrLogin',
                component: hrLogin,
                meta: {
                    requireLogin: false
                },
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
            }, {
                path: '/vuex',
                name: 'vuex',
                component: vuex,
                children: []
            }, {
                path: '/404',
                name: 'four',
                component: four,
                children: []
            }
        ]
    })
    /*
     * beforeEach:从一个页面跳转到另外一个页面时触发
     * to:要跳转的页面
     * from:从哪个页面出来
     * next:决定是否通过
     * 全局路由守卫
     */
router.beforeEach((to, from, next) => {
        if (to.matched.length == 0) { // 页面不存在跳到404
            next('/404');
        } else {
            if (VueCookies.isKey("cookieName")) {
                next();
            } else {
                if (to.path === '/hrLogin') {
                    next();
                } else {
                    next('/hrLogin')
                }
            }
        }
    })
    // router.beforeResolve((to, from, next) => {
    //     console.log("全局路由守卫，beforeResolve")
    //         // 调用next方法，next方法会让当前钩子依次向后执行
    //     next();
    // })
    // router.afterEach((to, from) => {
    //     console.log("全局路由守卫，afterEach")
    //     console.log('to', to)
    //     console.log('from', from)
    //         // 调用next方法，next方法会让当前钩子依次向后执行
    //     /**
    //      * 应用前端权限效验
    //      */
    // })
export default router;