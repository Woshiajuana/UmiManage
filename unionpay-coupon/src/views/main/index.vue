
<template>
    <div class="main-wrap">
        <router-view class="main-inner"></router-view>
        <van-tabbar route active-color="#ee0a24" inactive-color="#000">
            <van-tabbar-item replace to="/" icon="home-o">标签</van-tabbar-item>
            <van-tabbar-item replace to="/coupon" icon="friends-o">标签</van-tabbar-item>
            <van-tabbar-item replace to="/mine" icon="setting-o">标签</van-tabbar-item>
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
