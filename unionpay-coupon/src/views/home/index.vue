
<template>
    <wow-view nav-background-color="0xff8A7161">
        <div class="home-inner">
            <template v-if="arrBanner">
                <van-search
                    class="search-box"
                    shape="round"
                    disabled
                    placeholder="请输入搜索关键词"
                ></van-search>
                <van-swipe
                    class="banner-section"
                    :autoplay="3000"
                    indicator-color="white">
                    <van-swipe-item v-for="item in arrBanner" :key="item.id"><img :src="item.bannerPic"/></van-swipe-item>
                </van-swipe>
            </template>
            <van-tabs
                v-if="arrType"
                sticky
                class="tabs-section"
                v-model="active">
                <template #nav-right>
                    <span @click="$router.push('/equities/more')" class="more-link">查看全部 &gt;</span>
                </template>
                <van-tab
                    v-for="item in arrType"
                    :key="item.id"
                    :title="item.name">
                    <tab-content></tab-content>
                </van-tab>
            </van-tabs>
            <wow-loading v-if="!arrBanner || !arrType"></wow-loading>
        </div>
    </wow-view>
</template>

<script>
    import { Search, Swipe, SwipeItem, Tabs, Tab } from 'vant'
    import TabContent from './components/TabContent'
    import { reqEquitiesType, reqBannerList } from 'src/api'
    export default {
        data () {
            return {
                active: 0,
                arrBanner: '',
                arrType: '',
            }
        },
        created() {
            this.fetchData();
        },
        methods: {
            fetchData () {
                reqBannerList().then(res => {
                    this.arrBanner = res.details;
                    return reqEquitiesType()
                }).then(res => {
                    this.arrType = res.details.slice(0, 4);
                }).toast();
            },
        },
        components: {
            TabContent,
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
        .wow-loading{
            /deep/ {
                .van-loading__text{
                    color: #bbb;
                }
            }
        }
    }
    .search-box{
        @extend %df1;
        padding: j(10) j(20);
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
                //background-image: linear-gradient(to bottom, #8A7161, #715746);
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
