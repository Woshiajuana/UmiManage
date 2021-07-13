
export const $enum = {

    // 卡劵状态标识
    EQUITIES_STATUS: {
        options: [
            { label: '未使用', value: 'N', key: 'NOT_USED' },
            { label: '已使用', value: 'Y', key: 'USED' },
            { label: '已过期', value: 'E', key: 'EXPIRED' },
        ]
    },

    // 积分类型
    INTEGRAL_TYPE: {
        options: [
            { label: '充值', value: 'RECHARGE', key: 'RECHARGE' },
            { label: '消费', value: 'CONSUME', key: 'CONSUME' },
        ]
    }

};

for (let k in $enum) {
    let item = $enum[k];
    if (item.options) {
        const valueByKey = {};
        const labelByValue = {};
        item.options.forEach(it => {
            let { key, label, value } = it;
            valueByKey[key] = value;
            labelByValue[value] = label;
        });
        Object.assign(item, {  valueByKey, labelByValue });
    }
}

export default {
    install (Vue) {
        Vue.prototype.$enum = $enum;
    }
};
