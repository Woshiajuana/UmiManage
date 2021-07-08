
import curl  from 'src/api/curl'

// 登录
export const doUserLogin = data => curl('oauth/token/union', {
    ...data,
    grant_type: 'password',
}, { loading: true, method: 'get' });

// 查询Banner信息
export const reqBannerList = data => curl('sys/banner', data, { method: 'get' });

// 卡券<商品>类型查询
export const reqEquitiesType = data => curl('coupon/categories', data, { method: 'get' });


// 卡券<商品>列表查询
export const reqEquitiesList = data => curl('coupon/list', data);
