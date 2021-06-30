import Vue from 'vue'
import VueRouter from 'vue-router'
import { loadLanguageAsync, setPageTitle } from 'src/locale'

Vue.use(VueRouter);

const routes = (s => [
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
    loadLanguageAsync().then(() => {
        const { title } = to.meta;
        setPageTitle(title);
        next();
    });
});

export default router
