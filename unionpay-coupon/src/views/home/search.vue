
<template>
    <wow-view class="search-wrap">
        <van-search
            v-model="keyword"
            show-action
            shape="round"
            placeholder="请输入搜索关键词"
            class="search-box"
            @search="handleSearch()">
            <template #action>
                <div class="search-btn" @click="handleSearch()">搜索</div>
            </template>
        </van-search>
        <dl class="keyword-section" v-if="!isShowResult && computedHistory">
            <dt>
                <span>搜索历史</span>
                <van-icon @click="handleRemoveHistory" name="delete-o" />
            </dt>
            <dd class="keyword-item" @click="handleSearch(item)" v-for="(item, index) in arrHistory" :key="index">{{item}}</dd>
        </dl>
        <van-tabs
            v-if="isShowResult"
            sticky
            v-model="active"
            class="tabs-section">
            <van-tab
                v-for="item in arrType"
                :key="item.id"
                :title="item.name">
                <tab-content
                    :keyword="keyword"
                    :category-id="item.id"
                ></tab-content>
            </van-tab>
        </van-tabs>
    </wow-view>
</template>

<script>
    import { Search, Icon, Tabs, Tab } from 'vant'
    import TabContent from './components/TabContent'
    import { reqEquitiesType } from 'src/api'
    const $$SEARCH_KEYWORD = '$$SEARCH_KEYWORD'

    export default {
        data () {
            return {
                keyword: '',
                arrHistory: [],
                arrType: [],
                active: 0,
                isShowResult: false,
            }
        },
        watch: {
            keyword () {
                this.isShowResult = false;
            }
        },
        computed: {
            computedHistory () {
                return !!this.arrHistory.length;
            }
        },
        created() {
            this.getHistoryKeywords();
        },
        methods: {
            handleRemoveHistory () {
                this.$dialog.confirm({
                    title: '温馨提示',
                    message: `确认清除搜索历史？`,
                    cancelButtonText: '取消',
                    confirmButtonText: '确认',
                }).then(() => {
                    this.arrHistory = [];
                    this.setHistoryKeywords();
                }).null();
            },
            getHistoryKeywords () {
                this.arrHistory = this.$storage.local.getItem($$SEARCH_KEYWORD, [])
            },
            setHistoryKeywords () {
                this.$storage.local.setItem($$SEARCH_KEYWORD, this.arrHistory)
            },
            handleSearch (keyword) {
                if (keyword) {
                    this.keyword = keyword
                }
                if (!this.keyword) {
                    return this.$toast('请输入搜索关键词')
                }
                const arrHistory = [...this.arrHistory]
                const index = arrHistory.indexOf(this.keyword)
                if (index > -1) {
                    arrHistory.splice(index, 1)
                }
                arrHistory.unshift(this.keyword)
                this.arrHistory = arrHistory.slice(0, 10)
                this.setHistoryKeywords()
                this.active = 0;
                reqEquitiesType().then(res => {
                    this.arrType = res.details;
                    this.isShowResult = true;
                }).toast();
            }
        },
        components: {
            TabContent,
            VanSearch: Search,
            VanIcon: Icon,
            VanTabs: Tabs,
            VanTab: Tab,
        }
    }
</script>

<style lang="scss" scoped>
    @import "src/assets/scss/define";
    .search-box{
        background-color: $color-background-light;
    }
    .search-btn{
        @extend %cfff;
    }
    .search-wrap{
        background-color: $color-background-light;
    }
    .keyword-section{
        @extend %df;
        @extend %aic;
        @extend %fww;
        padding: j(10) j(20);
        dt{
            @extend %w100;
            @extend %df;
            @extend %aic;
            @extend %jcs;
            font-size: j(16);
            margin-bottom: j(10);
        }
        dd{
            @extend %df;
            @extend %aic;
            @extend %jcc;
            @extend %cp;
            padding: 0 j(10);
            height: j(30);
            margin: 0 j(10) j(10) 0;
            border-radius: j(2);
            background-color: $color-background;
        }
    }
    .tabs-section{
        /deep/ {
            .van-tabs__nav{
                @extend %df;
                @extend %aic;
                background-color: $color-background-light;
            }
            .van-sticky--fixed{
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
</style>
