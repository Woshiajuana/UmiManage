
import 'src/utils/es6-promise'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Toast } from 'vant'

Vue.config.productionTip = false

Vue.use(Toast);

(s => s.keys().forEach(k => Vue.use(s(k).default)))(require.context('./plugins', true, /\.js$/));

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
