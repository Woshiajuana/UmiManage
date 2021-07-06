
export default [
    {
        path: '/equities/more',
        name: 'EquitiesMore',
        component: () => import(/* webpackChunkName: "equities-more" */ 'src/views/equities/more'),
        meta: { depth: 2, title: 'router.setting' }
    },
    {
        path: '/equities/details',
        name: 'EquitiesDetails',
        component: () => import(/* webpackChunkName: "equities-details" */ 'src/views/equities/details'),
        meta: { depth: 2, title: 'router.setting' }
    },
    {
        path: '/equities/use',
        name: 'EquitiesUse',
        component: () => import(/* webpackChunkName: "equities-use" */ 'src/views/equities/use'),
        meta: { depth: 2, title: 'router.setting' }
    },
    {
        path: '/equities/use/merchant',
        name: 'EquitiesUseMerchant',
        component: () => import(/* webpackChunkName: "equities-use-merchant" */ 'src/views/equities/merchant'),
        meta: { depth: 2, title: 'router.setting' }
    },
]
