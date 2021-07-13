
import curl  from 'src/api/curl'

// 登录
export const doUserLogin = data => curl('oauth/token/union', {
    ...data,
    grant_type: 'password',
}, { loading: `登录中...`, method: 'get', useToken: false })

// 查下用户信息
export const reqUserInfo = () => curl('customer/myself', {}, { method: 'get' })

// 查询Banner信息
export const reqBannerList = data => curl('sys/banner', data, { method: 'get' })

// 卡券<商品>类型查询
export const reqEquitiesType = data => curl('coupon/categories', data, { method: 'get' })

// 卡券<商品>列表查询
export const reqEquitiesList = data => curl('coupon/list', data)

// 卡券<商品>详情查询
export const reqEquitiesInfo = data => curl('coupon/info', data)

// 卡券<商品>购买
export const doEquitiesExchange = data => curl('coupon/buy', data, { loading: true })

// 查询个人权益记录
export const reqEquitiesCouponList = data => curl('customer/goods/record', data)

// 查询个人订单记录
export const reqOrderList = data => curl('customer/order/record', data)

// 查询个人积分记录
export const reqIntegralList = data => curl('customer/point/record', data)

// 测试
export const fn = ({ pageNum }) => new Promise((resolve, reject) => {
    setTimeout(() => {
        pageNum <= 2 ? resolve({ details: new Array(10).fill('A'), sizeTotal: 32 }) : reject('网络错误');
    }, 1000)
});
