
export default [
    {
        path: '/setting',
        name: 'Setting',
        component: () => import(/* webpackChunkName: "setting" */ 'src/views/mine/Setting'),
        meta: { depth: 2, title: 'router.setting' }
    }
]
