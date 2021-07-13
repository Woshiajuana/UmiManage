
export default [
    {
        path: '/equities/more',
        name: 'EquitiesMore',
        component: () => import(/* webpackChunkName: "equities-more" */ 'src/views/equities/more'),
        meta: { depth: 2, title: 'router.equitiesMore' }
    },
    {
        path: '/equities/details',
        name: 'EquitiesDetails',
        component: () => import(/* webpackChunkName: "equities-details" */ 'src/views/equities/details'),
        meta: { depth: 3, title: 'router.setting' }
    },
]
