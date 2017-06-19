import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home/Home.vue'
import Login from '../views/login/Login.vue'

import Store from '../store/index'
import types from '../store/mutation-types'

/**权限管理*/
import Permission from '../views/permission/Permission.vue'
import PermissionRoleIndex from '../views/permission/children/PermissionRoleIndex.vue'
import PermissionRoleAdd from '../views/permission/children/PermissionRoleAdd.vue'
import PermissionResourceIndex from '../views/permission/children/PermissionResourceIndex.vue'


Vue.use(Router);

let router = new Router({
    routes: [
        /**首页*/
        {
            path: '/',
            name: 'home',
            component: Home,
            children: [
                /**权限管理*/
                {
                    path: 'permission',
                    name: 'permission',
                    component: Permission,
                    meta: {
                        tab_index: 'permission'
                    },
                    children: [
                        {
                            path: 'role',
                            name: 'permission-role-index',
                            component: PermissionRoleIndex,
                            meta: {
                                tab_index: '/permission/role'
                            }
                        },
                        {
                            path: 'role/add',
                            name: 'permission-role-add',
                            component: PermissionRoleAdd,
                            meta: {
                                tab_index: '/permission/role'
                            }
                        },
                        {
                            path: 'resource',
                            name: 'permission-resource-index',
                            component: PermissionResourceIndex,
                            meta: {
                                tab_index: '/permission/resource'
                            }
                        }
                    ]
                }
            ]
        },
        /**登录页*/
        {
            path: '/login',
            name: 'login',
            component: Login
        }
    ]
});

/**
 * 判断用户是否有登录，没有登录则跳转到登录页面
 * 如果用户已经登录，则回跳到登录的页的时候，要转到首页
 * */
router.beforeEach( (to, from, next) => {
    // var user = Tool.dataToSessionStorageOperate.achieve('user');
    // var token = Tool.dataToSessionStorageOperate.achieve('token');
    // if ((!token || !user) && to.path != '/login'){
    //     next('/login');
    // } else if ( token && user && to.path == '/login'){
    //     next('/?tab=all');
    // } else if ( token && user && to.path == '/' && !to.query.tab) {
    //     next('/?tab=all');
    // } else {
    //     next();
    // }
    if( to.meta.tab_index ) Store.commit( types.SET_TAB_INDEX, to.meta.tab_index );
    next();
});
export default router

