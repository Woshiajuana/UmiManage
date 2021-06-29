
<template>
    <div class="main-wrap">
        <router-view class="main-inner"></router-view>
        <van-tabbar route>
            <van-tabbar-item replace to="/" icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item replace to="/coupon" icon="gem-o">权益</van-tabbar-item>
            <van-tabbar-item replace to="/mine" icon="contact">我的</van-tabbar-item>
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
        max-width: j(750);
    }
    .main-inner{
        @extend %df1;
        @extend %w100;
        overflow-y: auto;
    }
</style>
