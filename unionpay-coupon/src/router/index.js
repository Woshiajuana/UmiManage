import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = (s => [
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "Home" */ 'src/views/Home'),
        meta: { depth: 1, title: '首页' },
    },
    {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ 'src/views/About'),
        // component: require('src/views/About').default,
        meta: { depth: 2, title: '关于' },
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
    next();
});

export default router
