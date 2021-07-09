
import { doUserLogin, reqUserInfo } from 'src/api'
import { $user } from 'src/plugins/user'

const state = {
    userInfo: $user.get(''),
};

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
            doUserLogin(params).then(res => {
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
