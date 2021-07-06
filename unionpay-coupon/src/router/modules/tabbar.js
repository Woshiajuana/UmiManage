
export default [
    {
        path: '/',
        component: () => import(/* webpackChunkName: "main" */ 'src/views/main'),
        children: [
            {
                path: '',
                name: 'Home',
                component: () => import(/* webpackChunkName: "home" */ 'src/views/home'),
                meta: { depth: 1, title: 'router.home' },
            },
            {
                path: 'equities',
                name: 'Equities',
                component: () => import(/* webpackChunkName: "coupon" */ 'src/views/equities'),
                meta: { depth: 1, title: 'router.equities' },
            },
            {
                path: '/mine',
                name: 'Mine',
                component: () => import(/* webpackChunkName: "mine" */ 'src/views/mine'),
                meta: { depth: 1, title: 'router.mine' },
            },
        ]
    }
]
