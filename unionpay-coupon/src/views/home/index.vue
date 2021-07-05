
<template>
    <wow-view class="home-wrap">
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
            class="tabs-section"
            v-model="active">
            <template #nav-right>
                <span>查看全部》</span>
            </template>
            <van-tab title="标签 1">内容 1</van-tab>
            <van-tab title="标签 2">内容 2</van-tab>
            <van-tab title="标签 3">内容 3</van-tab>
            <van-tab title="标签 4">内容 4</van-tab>
        </van-tabs>
    </wow-view>
</template>

<script>
    import { Search, Swipe, SwipeItem, Tabs, Tab } from 'vant'
    export default {
        data () {
            return {
                active: 0,
            }
        },
        components: {
            VanTabs: Tabs,
            VanTab: Tab,
            VanSwipe: Swipe,
            VanSwipeItem: SwipeItem,
            VanSearch: Search,
        }
    }
</script>

<style lang="scss">
    @import "src/assets/scss/define";
    .home-wrap{
        background-image: linear-gradient(180deg, rgba(46,46,56,0.20) 1%, #1F1D1C 100%);
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
        .van-tabs__nav {
            @extend %df;
            @extend %aic;
            background-color: transparent;
        }
        .van-tab{
            color: #999;
        }
        .van-tab--active{
            color: #fff;
        }
        .van-tabs__line{

        }
    }
</style>
