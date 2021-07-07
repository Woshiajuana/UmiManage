
import axios from 'axios'
import router from 'src/router'
import { Toast } from 'vant'
import { $user } from 'src/plugins/user'
import { filterDate } from 'src/utils/filters'
import CryptoJS from 'src/utils/crypto-js'

const ENCRYPT_KEY = 'dryadM5tgb&UJhlk'

export const baseURL =
    window.location.hostname.includes('localhost')
    || window.location.hostname.includes('192')
        ? 'http://192.168.2.133:19082/'
        : 'http://192.168.2.133:19082/';

const instance = axios.create({
    baseURL,
    timeout: 30 * 1000,
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
    },
});

instance.interceptors.request.use((config) => {
    // 在发送请求之前做些什么
    let { url, baseURL, data, params } = config;
    console.log(`${ url.startsWith('http') ? url : baseURL + url } 请求参数 =>`, data || params);
    return config;
}, (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use((response) => {
    // 对响应数据做点什么
    let { data, config } = response;
    let { url, baseURL } = config;
    console.log(`${ url.startsWith('http') ? url : baseURL + url } 请求结果 =>`, data);
    if (!data) {
        return Promise.reject(`网络繁忙，请稍后再试(1)`);
    }
    let { Message, Status, Data } = data;
    if ([201].indexOf(Status) > -1) {
        $user.clear();
        router.replace('/');
        return Promise.reject(Message || 'token无效，请重新授权');
    }
    if (Status !== 0) {
        return Promise.reject(Message || `网络繁忙，请稍后再试(2)`);
    }
    return Data;
}, (error) => {
    console.log('请求响应错误 => ', error.response);
    error = error.response
        ? `网络繁忙，请稍后再试[${error.response.status}]`
        : `网络繁忙，请稍后再试(3)`;
    return Promise.reject(error);
});

const curl = (url, data = {}, options = {}) => {
    let {
        method = 'post',
        loading = false,
        headers = {},
    } = options = Object.assign({ url }, options);
    let toast;
    if (loading) {
        toast = Toast.loading({
            message: loading === true ? 'Loading...' : loading,
            duration: 0,
        });
    }
    const timestamp = filterDate(Date.now(), 'yyyyMMddhhmmss');
    const { access_token } = $user.get({ });
    const headerParams = {
        timestamp,
        'TENANT-ID': 'DB_0',
        Authorization: access_token ? `bearer ${access_token}` : 'Basic  Y291cG9uOmNvdXBvbg==',
    };
    options.headers = Object.assign({}, headerParams, headers);
    if (!(data instanceof FormData)) {
        if (method !== 'GET') {
            data = Object.assign({ reqTime: timestamp, traceId: `${Date.now()}${randomNum(7)}` }, data);
        }
        data = Object.assign({ signature: signatureGenerate(Object.assign({}, data)) }, data);
    }
    options[method === 'get' ? 'params' : 'data'] = data;
    delete options.loading;
    return instance(options).finally(() => {
        if (toast) toast.clear();
    });
};

curl.get = (url, data = {}, options = {}) => {
    return this(url, data, Object.assign({ method: 'get' }, options));
};

curl.post = (url, data = {}, options = {}) => {
    return this(url, data, options);
};

export default curl;

// 签名
function signatureGenerate (data) {
    let stringSignTemp = '';
    Object.keys(data).sort().forEach(key => {
        let value = data[key];
        if (!['', null, undefined].includes(value)) {
            stringSignTemp = stringSignTemp ? `${stringSignTemp}&${key}=${value}` : `${key}=${value}`;
        }
    });
    stringSignTemp = stringSignTemp ? `${stringSignTemp}&key=${ENCRYPT_KEY}` : `key=${ENCRYPT_KEY}`;
    return CryptoJS.SHA256(stringSignTemp).toString();
}

function randomNum (len) {
    let result = '';
    while (len > 0) {
        len--;
        result += Math.floor(Math.random() * 10)
    }
    return result;
}
