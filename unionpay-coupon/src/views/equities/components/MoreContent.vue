
<template>
    <div class="view-flex tab-content" v-show="isVisible">
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
            <coupon-item v-for="(item, index) in pagingData" :key="index" :item="item"/>
        </wow-scroll>
    </div>
</template>

<script>
    import CouponItem from 'src/components/CouponItem'
    import PagingMixin from 'src/mixins/paging'
    import { reqEquitiesList } from 'src/api'

    export default {
        mixins: [
            PagingMixin,
        ],
        props: {
            categoryId: { default: '' },
            isVisible: { type: Boolean, default: false },
        },
        watch: {
            isVisible: {
                immediate: true,
                handler (v) {
                    if (v && !this.pagingData.length) {
                        this.pagingRefresh();
                    }
                },
            }
        },
        methods: {
            pagingGetUrlParamsOptions() {
                return { fn: reqEquitiesList, params: { categoryId: this.categoryId } }
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
            margin: j(10);
            /deep/{
                .coupon-item-image{
                    width: j(56);
                    height: j(56);
                }
                &:before{
                    @extend %dn;
                }
                .coupon-item-button{
                    width: j(66);
                    height: j(26);
                }
                .coupon-item-info{
                    min-height: j(56);
                }
                .coupon-item-name{
                    @include twno(1);
                }
                .coupon-item-number{
                    margin-top: j(4);
                }
                .c-flex1,
                .coupon-item-types,
                .coupon-item-status{
                    @extend %dn;
                }
            }
        }
    }
</style>
