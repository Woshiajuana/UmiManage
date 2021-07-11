
<template>
    <van-pull-refresh
        v-model="refreshing"
        :pulling-text="$t('pullingText')"
        :loosing-text="$t('loosingText')"
        :loading-text="$t('loadingText')"
        :success-text="refreshErrorText ||$t('successText')"
        @refresh="handleRefresh">
        <slot ref="list"></slot>
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
                    if (this.$refs.list) {
                        if (this.$refs.list.resetError) {
                            this.$refs.list.resetError();
                            this.$refs.list.check();
                        }
                    }
                });
            },
        },
        components: {
            VanPullRefresh,
        }
    }
</script>
