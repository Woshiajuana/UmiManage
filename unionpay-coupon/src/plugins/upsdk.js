
const isUpsdkEnv = typeof upsdk !== 'undefined';

function withPromise (fn, options = {}) {
    if (!isUpsdkEnv) {
        console.warn('请在云闪付APP里面打开');
        return Promise.resolve();
    }
    return new Promise((resolve, reject) => upsdk[fn]({ ...options,  success: resolve, fail: reject }));
}

function withFire (fn, options) {
    if (!isUpsdkEnv) {
        console.warn('请在云闪付APP里面打开');
        return ;
    }
    return upsdk[fn](options)
}

export const $upsdk = {

    // 需要在pluginReady回调中调用相关API
    pluginReady: o => withFire('pluginReady', o),

    // 1. 导航栏
    setTitleStyle: o => withFire('setTitleStyle', o),

    // 标题
    setNavigationBarTitle: o => withFire('setNavigationBarTitle', o),

    // 地理位置
    getLocationGps: o => withPromise('getLocationGps', o),

    // 2. 获取首页城市
    getLocationCity: o => withPromise('getLocationCity', o),

    // 关闭小程序
    closeWebApp: o => withFire('closeWebApp', o),

    // 授权登录
    appletAuth: o => withPromise('appletAuth', o),

}


export default {
    install (Vue) {
        Vue.prototype.$upsdk = $upsdk;
    }
}
