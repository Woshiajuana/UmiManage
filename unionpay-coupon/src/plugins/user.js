
import * as $storage from 'wow-cool/dist/lib/storage'

export function createLocalStorage (key) {
    const { setItem, removeItem, getItem, updateItem, clear } = $storage.local;
    return {
        set: setItem.bind(this, key),
        remove: removeItem.bind(this, key),
        get: getItem.bind(this, key),
        update: updateItem.bind(this, key),
        clear: clear.bind(this, key),
    }
}

export const $user = createLocalStorage('$$USER_INFO');

export default {
    install (Vue) {
        Vue.prototype.$user = $user;
        Vue.prototype.$storage = $storage;
    }
}
