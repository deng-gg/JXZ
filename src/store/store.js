import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: { // 数据仓库
        name: '奥利给',
        age: '19',
        msg: 'vuex来了',

        jops: "",

    },

    getters: { // getters主要是用来过滤和重组。这些事件最好也是能在计算属性中完成，用于监听事件变化的。
        getName(state) {
            return `我的名字是${state.name}`
        },

    },

    mutations: { //同步 
        // 在 Vuex store 中， 实际改变 状态(state) 的唯一方式是通过 提交(commit) 一个 mutation。
        // mutations方法必须是同步方法！
        changName(state, name) {
            state.name = name
        }
    },

    actions: { //异步
        //
        changName({ commit }, name) {
            let timer = setTimeout(() => {
                commit("changName", name);
                clearTimeout(timer);
            }, 1000)
        }
    }

})

export default store