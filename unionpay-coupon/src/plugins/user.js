
import * as $storage from 'wow-cool/dist/lib/storage'

export const $user = {};

export default {
    install (Vue) {
        Vue.prototype.$user = $user;
        Vue.prototype.$storage = $storage;
    }
}
