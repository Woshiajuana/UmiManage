
<template>
    <wow-view class="mine-wrap">
        <wow-scroll-refresh
            @refresh="handleRefresh">
            <user-section></user-section>

            <div class="section-card first-card">
                <div class="section-head"><h2>个人服务</h2></div>
                <van-grid :border="false" :column-num="3">
                    <van-grid-item text="全部订单" to="/order">
                        <template #icon><i class="icon-1"></i></template>
                    </van-grid-item>
                    <van-grid-item text="优惠劵">
                        <template #icon><i class="icon-2"></i></template>
                    </van-grid-item>
                    <van-grid-item text="积分记录" to="/integral">
                        <template #icon><i class="icon-3"></i></template>
                    </van-grid-item>
                </van-grid>
            </div>

            <div class="section-card">
                <div class="section-head"><h2>其他服务</h2></div>
                <van-grid :border="false">
                    <van-grid-item text="常见问题">
                        <template #icon><i class="icon-6"></i></template>
                    </van-grid-item>
                    <van-grid-item text="在线客服">
                        <template #icon><i class="icon-8"></i></template>
                    </van-grid-item>
                    <van-grid-item text="设置" to="/setting">
                        <template #icon><i class="icon-9"></i></template>
                    </van-grid-item>
                </van-grid>
            </div>

            <wow-end-line></wow-end-line>
        </wow-scroll-refresh>
    </wow-view>
</template>

<script>
    import { Grid as VanGrid, GridItem as VanGridItem } from 'vant'
    import { mapActions } from 'vuex'
    import UserSection from './components/UserSection'
    export default {
        created() {
            this.handleRefresh();
        },
        methods: {
            ...mapActions('user', ['actionUserUpdate']),
            handleRefresh (cb) {
                this.actionUserUpdate().finally(() => cb && cb());
            }
        },
        components: {
            UserSection,
            VanGrid,
            VanGridItem,
        }
    }
</script>

<style lang="scss" scoped>
    @import "src/assets/scss/define";
    .mine-wrap{
        padding-top: j(16);
        padding-bottom: j(20);
    }
    .section-card{
        @extend %oh;
        padding: j(10) 0;
        margin: j(16) j(10);
        border-radius: j(20);
        background-color: $color-background-light;
        &.first-card{
            box-shadow: 0 -1px 0 0 $color-primary;
        }
        /deep/ {
            .van-grid-item__content{
                background: transparent;
            }
            .van-grid-item__text{
                @extend %cfff;
            }
            .van-grid-item{
                i{
                    @extend %dib;
                    width: j(28);
                    height: j(28);
                }
            }
        }
        .icon-1{
            background: url("~src/assets/images/mine-icon1.png") no-repeat;
            background-size: contain;
        }
        .icon-2{
            background: url("~src/assets/images/mine-icon2.png") no-repeat;
            background-size: contain;
        }
        .icon-3{
            background: url("~src/assets/images/mine-icon3.png") no-repeat;
            background-size: contain;
        }
        //.icon-4{
        //    background: url("~src/assets/images/mine-icon4.png") no-repeat;
        //    background-size: contain;
        //}
        //.icon-5{
        //    background: url("~src/assets/images/mine-icon5.png") no-repeat;
        //    background-size: contain;
        //}
        .icon-6{
            background: url("~src/assets/images/mine-icon6.png") no-repeat;
            background-size: contain;
        }
        //.icon-7{
        //    background: url("~src/assets/images/mine-icon7.png") no-repeat;
        //    background-size: contain;
        //}
        .icon-8{
            background: url("~src/assets/images/mine-icon8.png") no-repeat;
            background-size: contain;
        }
        .icon-9{
            background: url("~src/assets/images/mine-icon9.png") no-repeat;
            background-size: contain;
        }
    }
    .section-head{
        @extend %df;
        @extend %aic;
        @extend %jcs;
        height: j(40);
        padding: 0 j(20);
        h2{
            font-size: j(16);
        }
    }
    .order-link{
        @extend %df;
        @extend %aic;
        color: #999;
    }
</style>
