
import { doUserLogin, reqUserInfo } from 'src/api'
import { $user } from 'src/plugins/user'

const state = {
    userInfo: $user.get(''),
};

const fn = function () {
    return Promise.resolve({
        "access_token": "0490d994-761d-4ba6-a0d8-88f1596050a4",
        "refresh_token": "cf523095-22d0-4fed-8558-f863eaf76341",
        "license": "made by dryad",
        "openId": "QBXYdsRfP0DYn9obQ5y2dXSXcOAZuS5vKH/F39qt3G3IpeJN07fSHc8ar4FhdwyA",
        "credentialsNonExpired": true,
        "enabled": true,
        "authorities": [{
            "authority": "ALL"
        }],
        "tenantId": "DB_0",
        "accountNonExpired": true,
        "id": "1412945132129341444",
        "username": "13127590698",
        "accountNonLocked": true,
        "scope": "server",
        "active": true,
        "token_type": "bearer",
        "expires_in": 43185
    });
} || doUserLogin

const mutations = {

    SET_USER_INFO (state, userInfo) {
        state.userInfo = userInfo;
        $user.set(userInfo);
    },

    UPT_USER_INFO (state, userInfo) {
        state.userInfo = Object.assign({}, state.userInfo, userInfo)
        $user.set(state.userInfo)
    }

};

const actions = {

    // 登录
    actionUserLogin ({ commit }, params) {
        return new Promise((resolve, reject) => {
            console.log('到了这个里 了')
            fn(params).then(res => {
                const { user_info, ...data } = res;
                const userInfo = Object.assign({}, user_info, data);
                commit('SET_USER_INFO', userInfo);
                resolve(userInfo);
            }).catch(err => {
                reject(err);
            });
        });
    },

    // 更新
    actionUserUpdate ({ commit }) {
        return reqUserInfo().then(res => {
            commit('UPT_USER_INFO', res)
        }).toast();
    },

    // 退出
    actionUserLogout ({ commit }) {
        return new Promise((resolve) => {
            commit('SET_USER_INFO', '')
            resolve();
        });
    },

};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
}
