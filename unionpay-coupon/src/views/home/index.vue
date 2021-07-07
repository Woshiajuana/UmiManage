
<template>
    <wow-view nav-background-color="0xff8A7161">
        <div class="home-inner">
            <div class="header">
                <div class="city-box"><span>上海市</span></div>
                <van-search
                    class="search-box"
                    shape="round"
                    disabled
                    placeholder="请输入搜索关键词"
                ></van-search>
            </div>
            <van-swipe
                class="banner-section"
                :autoplay="3000"
                indicator-color="white">
                <van-swipe-item>
                    <img src="https://img.owulia.com/daysnap/607d0ca6d3ad886378eb0cd8/AVATAR/20210419163036.jpeg?w=64"/>
                </van-swipe-item>
                <van-swipe-item>
                    <img src="https://img.owulia.com/daysnap/607d0ca6d3ad886378eb0cd8/AVATAR/20210419163036.jpeg?w=64"/>
                </van-swipe-item>
            </van-swipe>
            <van-tabs
                sticky
                class="tabs-section"
                v-model="active">
                <template #nav-right>
                    <span @click="$router.push('/equities/more')" class="more-link">查看全部 &gt;</span>
                </template>
                <van-tab title="代金卷">
                    <coupon-item v-for="(item, index) in 10" :key="index"></coupon-item>
                </van-tab>
                <van-tab title="充值卡">
                    <coupon-item v-for="(item, index) in 2" :key="index"></coupon-item>
                </van-tab>
                <van-tab title="权益会员">
                    <coupon-item v-for="(item, index) in 3" :key="index"></coupon-item>
                </van-tab>
                <van-tab title="其他">
                    <coupon-item v-for="(item, index) in 4" :key="index"></coupon-item>
                </van-tab>
            </van-tabs>
            <wow-end-line></wow-end-line>
        </div>
    </wow-view>
</template>

<script>
    import { Search, Swipe, SwipeItem, Tabs, Tab } from 'vant'
    import CouponItem from 'src/components/CouponItem'
    export default {
        data () {
            return {
                active: 0,
            }
        },
        components: {
            CouponItem,
            VanTabs: Tabs,
            VanTab: Tab,
            VanSwipe: Swipe,
            VanSwipeItem: SwipeItem,
            VanSearch: Search,
        }
    }
</script>

<style lang="scss" scoped>
    @import "src/assets/scss/define";
    .home-inner{
        min-height: 100%;
        background-image: linear-gradient(to bottom, #8A7161 100px, #201E23 300px, #1F1D1C);
    }
    .header{
        @extend %df;
        @extend %aic;
        padding: j(10) j(20);
    }
    .city-box{
        @extend %df;
        @extend %aic;
        @extend %jcc;
        margin-right: j(12);
        font-size: j(14);
        span{
            max-width: j(100);
        }
        &:after{
            content: '';
            width: 0;
            height: 0;
            margin: j(5) 0 0 j(5);
            border-style: solid;
            border-width: 5px;
            border-color: #fff transparent transparent transparent;
        }
    }
    .search-box{
        @extend %df1;
        padding: 0;
        background-color: transparent;
    }
    .banner-section{
        @extend %ma;
        border-radius: j(10);
        height: j(136);
        width: j(355);
        img{
            @extend %db;
            @extend %w100;
            @extend %h100;
            object-fit: cover;
        }
    }
    .tabs-section{
        /deep/ {
            .van-tabs__nav{
                @extend %df;
                @extend %aic;
                background-color: transparent;
            }
            .van-sticky--fixed{
                background-color: #8A7161;
                background-image: linear-gradient(to bottom, #8A7161, #715746);
                .van-tab{
                    color: #ddd;
                }
                .more-link{
                    color: #ddd;
                }
            }
            .van-tab{
                color: #999;
            }
            .van-tab--active{
                color: #fff;
            }
            .van-tabs__line{
                background-image: $gradient-primary-color;
            }
            .van-tabs__content{
                min-height: 100vh;
            }
        }
    }
    .more-link{
        @extend %c9;
        @extend %cp;
        padding: 0 j(14);
        font-size: j(12);
    }
</style>
