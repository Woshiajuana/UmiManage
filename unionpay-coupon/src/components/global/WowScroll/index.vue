
<template>
    <van-pull-refresh
        class="wow-scroll"
        v-model="refreshing"
        :success-text="error || '刷新成功'"
        @refresh="handleRefresh">
        <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            :error="!!error"
            :error-text="error"
            :immediate-check="false"
            @load="handleLoad">
            <slot></slot>
        </van-list>
    </van-pull-refresh>
</template>

<script>
    import { List as VanList, PullRefresh as VanPullRefresh } from 'vant'
    export default {
        data () {
            return {
                refreshing: false,
                loading: false,
            }
        },
        props: {
            finished: { type: Boolean, default: false },
            error: { type: String, default: '' },
        },
        methods: {
            handleLoad () {
                // 加载更多
                console.log('加载更多');
                this.$emit('load', () => {
                    this.loading = false;
                });
            },
            handleRefresh () {
                this.$emit('refresh', () => {
                    this.refreshing = false;
                });
            },
        },
        components: {
            VanList,
            VanPullRefresh,
        }
    }
</script>

<style lang="scss" scoped>
    @import "src/assets/scss/define";
    .wow-scroll{
        @extend %df1;
        @extend %h100;
        height: j(300);
        overflow-y: auto;
        .van-list{
            @extend %h100;
        }
    }
</style>
