import Vue from 'vue'
import VueRouter from 'vue-router'
import { loadLanguageAsync } from 'src/locale'
import { $user } from 'src/plugins/user'


const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
    return originalPush.call(this, location).catch(err => err)
}
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location, onResolve, onReject) {
    if (onResolve || onReject) return originalReplace.call(this, location, onResolve, onReject)
    return originalReplace.call(this, location).catch(err => err)
}

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
    loadLanguageAsync(undefined, to.meta).then(() => {
        const user = $user.get();
        console.log('user => ', user);
        if (!user) {
            // 未登录
            if (['/'].includes(to.path)) {
                next();
            } else {
                next('/');
            }
        } else {
            // 已登录
            next();
        }
    });
});

export default router
