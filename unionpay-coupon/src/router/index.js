import Vue from 'vue'
import VueRouter from 'vue-router'
import { loadLanguageAsync } from 'src/locale'

Vue.use(VueRouter);

const routes = (s => [
    {
        path: '/',
        name: 'Main',
        component: () => import(/* webpackChunkName: "Home" */ 'src/views/Main'),
        meta: { depth: 1, title: '首页' },
    },
    ...s.keys().map(k => s(k).default).flat(),
    {
        path: '*',
        redirect: '/',
    },
])(require.context('./modules/', true, /\.js$/));

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes,
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || '';
    loadLanguageAsync().then(() => next());
});

export default router
