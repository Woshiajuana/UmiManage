
export default [
    {
        path: '/advert',
        name: 'Advert',
        component: () => import(/* webpackChunkName: "advert" */ 'src/views/home/advert'),
        meta: { depth: 2, title: 'router.advert' }
    },
    {
        path: '/search',
        name: 'Search',
        component: () => import(/* webpackChunkName: "search" */ 'src/views/home/search'),
        meta: { depth: 2, title: 'router.search' }
    },
]
