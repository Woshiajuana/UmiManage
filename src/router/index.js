import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home/Home.vue'
import Login from '../views/login/Login.vue'

import Store from '../store/index'
import types from '../store/mutation-types'

/**权限管理*/
import Permission from '../views/permission/Permission.vue'
import PermissionRoleIndex from '../views/permission/children/PermissionRoleIndex.vue'
import PermissionRoleAddOrEdit from '../views/permission/children/PermissionRoleAddOrEdit.vue'
import PermissionRoleAddResource from '../views/permission/children/PermissionRoleAddResource.vue'
import PermissionRoleDetails from '../views/permission/children/PermissionRoleDetails.vue'
import PermissionResourceIndex from '../views/permission/children/PermissionResourceIndex.vue'
import PermissionResourceAddOrEdit from '../views/permission/children/PermissionResourceAddOrEdit.vue'
import PermissionAdminIndex from '../views/permission/children/PermissionAdminIndex.vue'



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
                        /**角色管理*/
                        {
                            path: 'role',
                            name: 'permission-role-index',
                            component: PermissionRoleIndex,
                            meta: {
                                tab_index: '/permission/role',
                                crumb: [
                                    { path: '/permission', icon: 'el-icon-message', con: '权限管理' },
                                    { con: '角色管理' }
                                ]
                            }
                        },
                        /**添加角色*/
                        {
                            path: 'role/add',
                            name: 'permission-role-add-or-edit',
                            component: PermissionRoleAddOrEdit,
                            meta: {
                                tab_index: '/permission/role',
                                crumb: [
                                    { path: '/permission', icon: 'el-icon-message', con: '权限管理' },
                                    { path: '/permission/role', con: '角色管理' },
                                    { con: '添加系统角色' }
                                ]
                            }
                        },
                        /**编辑角色*/
                        {
                            path: 'role/edit/:role_id',
                            name: 'permission-role-add-or-edit',
                            component: PermissionRoleAddOrEdit,
                            meta: {
                                tab_index: '/permission/role',
                                crumb: [
                                    { path: '/permission', icon: 'el-icon-message', con: '权限管理' },
                                    { path: '/permission/role', con: '角色管理' },
                                    { con: '编辑系统角色' }
                                ]
                            }
                        },
                        /**角色详情*/
                        {
                            path: 'role/details/:role_id',
                            name: 'permission-role-details',
                            component: PermissionRoleDetails,
                            meta: {
                                tab_index: '/permission/role',
                                crumb: [
                                    { path: '/permission', icon: 'el-icon-message', con: '权限管理' },
                                    { path: '/permission/role', con: '角色管理' },
                                    { con: '角色详情' }
                                ]
                            }
                        },
                        /**角色添加资源*/
                        {
                            path: 'role/details/:role_id/resource',
                            name: 'permission-role-add-resource',
                            component: PermissionRoleAddResource,
                            meta: {
                                tab_index: '/permission/role',
                                crumb: [
                                    { path: '/permission', icon: 'el-icon-message', con: '权限管理' },
                                    { path: '/permission/role', con: '角色管理' },
                                    { path: '/permission/role/details', params: 'role_id', con: '角色详情' },
                                    { con: '添加系统资源' }
                                ]
                            }
                        },
                        /**资源管理*/
                        {
                            path: 'resource',
                            name: 'permission-resource-index',
                            component: PermissionResourceIndex,
                            meta: {
                                tab_index: '/permission/resource',
                                crumb: [
                                    { path: '/permission', icon: 'el-icon-message', con: '权限管理' },
                                    { con: '资源管理' }
                                ]
                            }
                        },
                        /**添加资源*/
                        {
                            path: 'resource/add',
                            name: 'permission-resource-add-or-edit',
                            component: PermissionResourceAddOrEdit,
                            meta: {
                                tab_index: '/permission/resource',
                                crumb: [
                                    { path: '/permission', icon: 'el-icon-message', con: '权限管理' },
                                    { path: '/permission/resource', con: '资源管理' },
                                    { con: '添加系统资源' }
                                ]
                            }
                        },
                        /**编辑资源*/
                        {
                            path: 'resource/edit/:resource_id',
                            name: 'permission-resource-add-or-edit',
                            component: PermissionResourceAddOrEdit,
                            meta: {
                                tab_index: '/permission/resource',
                                crumb: [
                                    { path: '/permission', icon: 'el-icon-message', con: '权限管理' },
                                    { path: '/permission/resource', con: '资源管理' },
                                    { con: '编辑系统资源' }
                                ]
                            }
                        },
                        /**管理员管理*/
                        {
                            path: 'admin',
                            name: 'permission-admin-index',
                            component: PermissionAdminIndex,
                            meta: {
                                tab_index: '/permission/admin',
                                crumb: [
                                    { path: '/permission', icon: 'el-icon-message', con: '权限管理' },
                                    { con: '管理员管理' }
                                ]
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

