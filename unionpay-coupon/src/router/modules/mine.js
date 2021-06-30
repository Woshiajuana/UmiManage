
export default [
    {
        path: '/setting',
        name: 'Setting',
        component: () => import(/* webpackChunkName: "setting" */ 'src/views/mine/Setting'),
        meta: { depth: 2, title: 'router.setting' }
    },
    {
        path: '/order',
        name: 'Order',
        component: () => import(/* webpackChunkName: "order" */ 'src/views/order'),
        meta: { depth: 2, title: 'router.order' }
    }
]
