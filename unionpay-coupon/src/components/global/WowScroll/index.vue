
<template>
    <van-pull-refresh
        class="wow-scroll"
        v-model="refreshing"
        success-text="刷新成功"
        @refresh="handleRefresh">
        <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            :error.sync="error"
            :error-text="errorText"
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
                error: false,
                errorText: '',
            }
        },
        props: {
            finished: { type: Boolean, default: false },
        },
        methods: {
            handleLoad () {
                this.loading = false;
                // 加载更多
                this.$emit('load', err => {
                    if (err) {
                        this.error = true;
                        this.errorText = err;
                    }
                });
            },
            handleRefresh () {
                // 重新加载数据
                // 将 loading 设置为 true，表示处于加载状态
                // this.loading = true;
                this.$emit('refresh', () => {

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
