
<template>
    <div class="home-tab-content">
        <wow-super-box
            @refresh="pagingRefresh"
            :error="pagingError"
            v-if="pagingTotal < 1"
            :loading="pagingTotal === -1"
            use-btn
        ></wow-super-box>
        <wow-scroll-loading
            v-else
            :finished="pagingData.length >= pagingTotal"
            @load="pagingLoad">
            <coupon-item
                v-for="item in pagingData"
                :key="item.id"
            ></coupon-item>
        </wow-scroll-loading>
    </div>
</template>

<script>
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
        props: {
            categoryId: { default: '' },
        },
        created() {
            this.pagingRefresh();
        },
        methods: {
            pagingGetUrlParamsOptions() {
                return { fn: fn || reqEquitiesList, params: { categoryId: this.categoryId } }
            },
        },
        components: {
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
