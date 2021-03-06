
export default [
    {
        path: '/setting',
        name: 'Setting',
        component: () => import(/* webpackChunkName: "setting" */ 'src/views/mine/setting'),
        meta: { depth: 2, title: 'router.setting' }
    },
    {
        path: '/integral',
        name: 'Integral',
        component: () => import(/* webpackChunkName: "integral" */ 'src/views/mine/integral'),
        meta: { depth: 2, title: '我的积分' }
    },
    {
        path: '/order',
        name: 'Order',
        component: () => import(/* webpackChunkName: "order" */ 'src/views/order'),
        meta: { depth: 2, title: 'router.order' }
    },
    {
        path: '/order/details',
        name: 'OrderDetails',
        component: () => import(/* webpackChunkName: "order-details" */ 'src/views/order/details'),
        meta: { depth: 3, title: 'router.order' }
    },
]
