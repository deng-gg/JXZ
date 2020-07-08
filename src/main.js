import Vue from 'vue'
import eleconfig from './components/elemtnui/index.js'
import App from './App.vue'
import ElementUI from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';
import router from './router/router.js'
import axios from 'axios'
import Vuex from 'vuex'
import store from './store/store'
import VueCookies from 'vue-cookies'

Vue.use(eleconfig)
Vue.prototype.$http = axios;
Vue.use(Vuex)
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueCookies)


new Vue({
    router,
    store, // 使用store
    render: h => h(App)
}).$mount('#app')