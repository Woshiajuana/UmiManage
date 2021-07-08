
<template>
    <van-list
        ref="list"
        v-model="loading"
        :finished="finished"
        :finished-text="$t('finishedText')"
        :loading-text="$t('loadingText')"
        :error.sync="loadError"
        :error-text="loadErrorText"
        @load="handleLoad">
        <slot></slot>
    </van-list>
</template>

<script>
    import { List as VanList } from 'vant'
    export default {
        i18n: {
            messages: {
                'zh-CN': {
                    loadingText: '加载中...',
                    finishedText: '没有更多了',
                    retryText: '，点击重新加载'
                },
                'en-US': {
                    loadingText: 'Loading...',
                    finishedText: 'No more',
                    retryText: '，Try again'
                },
            }
        },
        data () {
            return {
                loading: false,
                loadError: false,
                loadErrorText: '',
            }
        },
        props: {
            finished: { type: Boolean, default: false },
        },
        methods: {
            handleLoad () {
                this.$emit('load', err => {
                    this.loadError = !!err;
                    this.loadErrorText = err ? `${err}${this.$t('retryText')}` : '';
                    this.loading = false;
                });
            },
            resetError () {
                this.loadError = false;
                this.loadErrorText = '';
            },
            check () {
                this.$refs.list.check();
            },
        },
        components: {
            VanList,
        }
    }
</script>
