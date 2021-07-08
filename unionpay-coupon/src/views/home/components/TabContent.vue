
<template>
    <div class="home-tab-content">
        <wow-super-box
            @refresh="pagingRefresh"
            :error="pagingError"
            v-if="pagingTotal < 1"
            :loading="pagingTotal === -1"
            use-btn
        ></wow-super-box>
        <van-list
            v-else
            :finished="pagingData.length >= pagingTotal"
            finished-text="没有更多了"
            :error.sync="loadError"
            :error-text="pagingError"
            v-model="loading"
            @load="pagingLoad"
        >
            <coupon-item
                v-for="item in pagingData"
                :key="item.id"
            ></coupon-item>
        </van-list>
    </div>
</template>

<script>
    import { List as VanList } from 'vant'
    import CouponItem from 'src/components/CouponItem'
    import { reqEquitiesList } from 'src/api'
    import PagingMixin from 'src/mixins/paging'
    const fn = ({ pageNum }) => new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(pageNum)
            pageNum <= 2 ? resolve({ details: new Array(10).fill('A'), sizeTotal: 32 }) : reject('网络错误');
        }, 1000)
    });
    export default {
        mixins: [
            PagingMixin,
        ],
        watch: {
            'pagingError' (v) {
                this.loadError = !!v;
            }
        },
        data () {
            return {
                loading: false,
                loadError: false,
            }
        },
        props: {
            categoryId: { default: '' },
        },
        created() {
            this.pagingRefresh();
        },
        methods: {
            handleLoad () {
                console.log(111);
            },
            pagingGetUrlParamsOptions() {
                return { fn: fn || reqEquitiesList, params: { categoryId: this.categoryId } }
            },
            // pagingFormatResult (res) {
            //     if (Array.isArray(res)) {
            //         res = { details: res, sizeTotal: res.length };
            //     }
            //     return {  details: new Array(10).fill('a'),  sizeTotal: 20 };
            // },
        },
        components: {
            VanList,
            CouponItem,
        }
    }
</script>

<style lang="scss" scoped>
    @import "src/assets/scss/define";
    .home-tab-content{
        /deep/{
            .wow-super-box{
                min-height: j(360);
            }
        }
    }
</style>
