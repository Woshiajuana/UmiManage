
import 'src/utils/es6-promise'

import Vue from 'vue'
import App from './App.vue'
import { Toast, Dialog } from 'vant'

import router from './router'
import store from './store'
import i18n from './locale'
// import { $upsdk } from './plugins/upsdk'
import VueCupUi from 'vue-cup-ui'
import 'vue-cup-ui/lib/vue-cup-ui.css'

Vue.use(VueCupUi);

Vue.config.productionTip = false;

// 将所有 loading Toast 设置为背景不可点击
Toast.setDefaultOptions('loading', { forbidClick: true, message: '加载中...' });
Vue.use(Toast);
Vue.use(Dialog);

(s => s.keys().forEach(k => Vue.use(s(k).default)))(require.context('./plugins', true, /\.js$/));

// $upsdk.pluginReady(() => {
    new Vue({
        i18n,
        router,
        store,
        render: h => h(App)
    }).$mount('#app')
// });
