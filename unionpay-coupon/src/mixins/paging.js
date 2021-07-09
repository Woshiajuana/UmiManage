
export default {

    data () {
        return {
            pagingData: '',
            pagingIndex: 1,
            pagingSize: 10,
            pagingTotal: -1,
            pagingError: '',
        }
    },

    methods: {
        pagingRefresh (callback) {
            this.pagingIndex = 1;
            this.pagingReqDataList(this.pagingIndex, callback);
        },
        pagingLoad (callback) {
            this.pagingReqDataList(this.pagingIndex + 1, callback);
        },
        pagingReqDataList (pagingIndex, callback) {
            this.pagingError = '';
            const { fn, params = {}, options } = this.pagingGetUrlParamsOptions();
            fn(Object.assign({
                pageNum: pagingIndex,
                pageSize: this.pagingSize,
            }, params), options).then(res => {
                const { details: list, sizeTotal: total } = this.pagingFormatResult(res);
                this.pagingIndex = pagingIndex;
                this.pagingData = pagingIndex === 1 ? list : [...this.pagingData, ...list];
                this.pagingTotal = +total;
            }).toast((err, msg) => {
                this.pagingError = msg;
                return true;
            }).finally(() => {
                typeof callback === 'function' && callback(this.pagingError);
            });
        },
        pagingFormatResult (res) {
            if (Array.isArray(res)) {
                res = { details: res, sizeTotal: res.length };
            }
            return res;
        },
        // 需要重写这个方法
        pagingGetUrlParamsOptions () {
            return { fn: () => {}, params: {}, options: {} }
        },
    },

}
