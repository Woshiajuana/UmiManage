
<template>
    <van-pull-refresh
        class="wow-scroll"
        v-model="refreshing"
        :pulling-text="$t('pullingText')"
        :loosing-text="$t('loosingText')"
        :loading-text="$t('loadingText')"
        :success-text="refreshErrorText ||$t('successText')"
        @refresh="handleRefresh">
        <wow-scroll-loading
            ref="list"
            :finished="finished"
            @load="$emit('load', $event)">
            <slot></slot>
        </wow-scroll-loading>
    </van-pull-refresh>
</template>

<script>
    import { PullRefresh as VanPullRefresh } from 'vant'
    export default {
        i18n: {
            messages: {
                'zh-CN': {
                    pullingText: '↓ 下拉即可刷新',
                    loosingText: '↑ 释放即可刷新',
                    loadingText: '加载中...',
                    successText: '刷新成功',
                },
                'en-US': {
                    pullingText: '↓ Pulling',
                    loosingText: '↑ Loosing',
                    loadingText: 'Loading...',
                    successText: 'Success',
                },
            }
        },
        data () {
            return {
                refreshing: false,
                refreshErrorText: '',
                loading: false,
                loadError: false,
                loadErrorText: '',
            }
        },
        props: {
            finished: { type: Boolean, default: false },
        },
        methods: {
            handleRefresh () {
                this.$emit('refresh', err => {
                    this.refreshErrorText = err || '';
                    this.refreshing = false;
                    this.$refs.list.resetError();
                    this.$refs.list.check();
                });
            },
        },
        components: {
            VanPullRefresh,
        }
    }
</script>

<style lang="scss" scoped>
    @import "src/assets/scss/define";
    .wow-scroll{
        @extend %df1;
        @extend %h100;
        height: j(150);
        overflow-y: auto;
    }
</style>
