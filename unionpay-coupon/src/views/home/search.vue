
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
        <dl class="keyword-section" v-if="computedHistory">
            <dt>
                <span>搜索历史</span>
                <van-icon name="delete-o" />
            </dt>
            <dd class="keyword-item" @click="handleSearch(item)" v-for="(item, index) in arrHistory" :key="index">{{item}}</dd>
        </dl>

    </wow-view>
</template>

<script>
    import { Search, Icon } from 'vant'

    const $$SEARCH_KEYWORD = '$$SEARCH_KEYWORD'

    export default {
        data () {
            return {
                keyword: '',
                arrHistory: [],
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
            getHistoryKeywords () {
                this.arrHistory = this.$storage.local.getItem($$SEARCH_KEYWORD, [])
            },
            setHistoryKeywords () {
                this.$storage.local.setItem($$SEARCH_KEYWORD, this.arrHistory)
            },
            handleSearch (keyword) {
                if (keyword) {
                    this.keyword = keyword;
                }
                if (!this.keyword) {
                    return this.$toast('请输入搜索关键词');
                }
                const arrHistory = [...this.arrHistory];
                const index = arrHistory.findIndex(this.keyword);
                if (index > -1) {
                    arrHistory.splice(index, 1);
                    arrHistory.unshift(this.keyword);
                }
                this.arrHistory = arrHistory.slice(0, 10)
                this.setHistoryKeywords()
            }
        },
        components: {
            VanSearch: Search,
            VanIcon: Icon,
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
</style>
