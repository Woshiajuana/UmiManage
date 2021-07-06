
<template>
    <div class="main-wrap">
        <router-view class="main-inner"></router-view>
        <div class="main-tabbar-seat"></div>
        <van-tabbar
            fixed
            class="main-tabbar"
            active-color="#FABE97"
            inactive-color="#999999"
            route>
            <van-tabbar-item
                replace to="/"
                icon="home-o">
                {{$t('main.home')}}
                <template #icon><i class="iconfont icon-shouye-weixuanzhong"></i></template>
            </van-tabbar-item>
            <van-tabbar-item
                replace
                to="/equities"
                icon="gem-o">
                {{$t('main.equities')}}
                <template #icon><i class="iconfont icon-wodequanyi-weixuanzhong"></i></template>
            </van-tabbar-item>
            <van-tabbar-item
                replace to="/mine"
                icon="contact">
                {{$t('main.mine')}}
                <template #icon><i class="iconfont icon-wode-weixuanzhong"></i></template>
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    import { Tabbar as VanTabbar, TabbarItem as VanTabbarItem } from 'vant'
    export default {
        components: {
            VanTabbar,
            VanTabbarItem,
        },
    }
</script>

<style lang="scss" scoped>
    @import "src/assets/scss/define";
    .main-wrap{
        @extend %df;
        @extend %fdc;
        @extend %ma;
        @extend %w100;
        max-width: j(375);
    }
    .main-inner{
        @extend %df1;
        @extend %bsb;
        @extend %w100;
        overflow-y: auto;
    }
    .main-tabbar-seat{
        height: 50px;
        padding-bottom: constant(safe-area-inset-bottom);
        padding-bottom: env(safe-area-inset-bottom);
    }
    .main-tabbar{
        background-color: $color-background-light;
        &:after{
            border-width: 1px 0 0 0;
            border-color: #444;
        }
        .iconfont{
            @extend %df;
            @extend %aic;
            @extend %jcc;
            width: j(24);
            height: j(24);
            font-size: j(24) !important;
        }
        .van-tabbar-item--active{
            background-color: transparent;
        }
    }
</style>
