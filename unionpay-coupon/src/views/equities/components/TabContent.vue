
<template>
    <div class="view-flex tab-content">
        <wow-super-box
            @refresh="pagingRefresh"
            :error="pagingError"
            v-if="pagingTotal < 1"
            :loading="pagingTotal === -1"
        ></wow-super-box>
        <wow-scroll
            v-else
            :finished="pagingData.length >= pagingTotal"
            @refresh="pagingRefresh"
            @load="pagingLoad">
            <coupon-item v-for="(item, index) in pagingData" :key="index" :title="item" :value="index"/>
        </wow-scroll>
    </div>
</template>

<script>
    import CouponItem from 'src/components/CouponItem'
    import PagingMixin from 'src/mixins/paging'
    const fn = ({ pageIndex }) => new Promise((resolve, reject) => {
        setTimeout(() => {
            pageIndex <= 2 ? resolve({ list: new Array(10).fill('A'), total: 50 }) : reject('网络错误');
        }, 1000)
    });

    export default {
        mixins: [
            PagingMixin,
        ],
        created() {
            this.pagingRefresh();
        },
        methods: {
            pagingGetUrlParamsOptions() {
                return { fn };
            }
        },
        components: {
            CouponItem,
        },
    }
</script>

<style lang="scss" scoped>
    @import "src/assets/scss/define";
    .tab-content{
        .coupon-item{
            border-radius: j(8);
            margin: j(10);
            background-color: $color-background-light;
            &:before{
                @extend %dn;
            }
        }
    }
</style>
