
export default [
    {
        path: '/',
        component: () => import(/* webpackChunkName: "main" */ 'src/views/main'),
        meta: { depth: 1, title: '首页' },
        children: [
            {
                path: '',
                name: 'Home',
                component: () => import(/* webpackChunkName: "home" */ 'src/views/home'),
                meta: { depth: 1, title: '共竞王者' },
            },
            {
                path: 'coupon',
                name: 'Coupon',
                component: () => import(/* webpackChunkName: "coupon" */ 'src/views/coupon'),
                meta: { depth: 2, title: '王者排位' },
            },
            {
                path: '/mine',
                name: 'Mine',
                component: () => import(/* webpackChunkName: "mine" */ 'src/views/mine'),
                meta: { depth: 3, title: '个人中心' },
            },
        ]
    }
]
