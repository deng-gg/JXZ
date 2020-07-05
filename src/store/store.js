import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: { // 数据仓库

        userList: '', //sessionStorage.getItem('UserList') ? JSON.parse(sessionStorage.getItem('UserList')) : null,

    },

    getters: { // getters主要是用来过滤和重组。这些事件最好也是能在计算属性中完成，用于监听事件变化的。
        getData(state) {
            return state.userList
        },


    },

    mutations: { //同步 
        // 在 Vuex store 中， 实际改变 状态(state) 的唯一方式是通过 提交(commit) 一个 mutation。
        // mutations方法必须是同步方法！
        addData(state, vals) {
            if (vals.length > 0) {
                state.userList = vals;
            }

        }
    },

    actions: { //异步
        addAsync(state, vals2) {

            if (vals2.length > 0) {
                state.userList = vals2;
            }
        }
    }

})

export default store