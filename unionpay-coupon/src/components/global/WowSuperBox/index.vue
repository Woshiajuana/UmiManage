
<template>
    <van-empty
        class="wow-super-box"
        :image="error ? 'error' : 'default'"
        :description="error ? error : (loading || isLoading) ? '' : $t('emptyText')">
        <template v-if="(loading || isLoading) && !error" #image>
            <van-loading
                class="wow-super-loading"
                vertical
                size="40"
            ></van-loading>
        </template>
        <van-button
            v-if="error || (!loading && !isLoading && useBtn)"
            @click="handleRefresh"
            round
            type="danger"
            class="wow-super-button"
        >{{ $t('retryText') }}</van-button>
    </van-empty>
</template>

<script>
    import { Empty as VanEmpty, Button as VanButton, Loading as VanLoading } from 'vant'

    export default {
        data () {
            return {
                isLoading: false,
            }
        },
        i18n: {
            messages: {
                'zh-CN': {
                    emptyText: '空空如也',
                    retryText: '刷新一下',
                    loadingText: '加载中',
                },
                'en-US': {
                    emptyText: 'Nothing...',
                    retryText: 'Try again',
                    loadingText: 'Loading',
                },
            }
        },
        props: {
            loading: { default: true },
            error: { default: '' },
            useBtn: { type: Boolean, default: false },
        },
        methods: {
            handleRefresh() {
                this.isLoading = true;
                this.$emit('refresh', () => {
                    this.isLoading = false;
                });
            }
        },
        components: {
            VanEmpty,
            VanLoading,
            VanButton,
        }
    }
</script>

<style lang="scss">
    @import "src/assets/scss/define";
    .wow-super-box{
        @extend %w100;
        @extend %df;
        @extend %aic;
        @extend %jcc;
        height: 66.6%;
        min-height: j(500);
        .van-empty__image{
            @extend %df;
            @extend %aic;
            @extend %jcc;
        }
    }
    .wow-super-loading{
        @extend %df;
        @extend %aic;
        @extend %jcc;
        @extend %h100;
        @extend %ma;
        width: j(50);
        height: j(50);
        color: #fff;
        padding: j(10);
        border-radius: j(10);
        background-color: rgba(0, 0, 0, .5);
    }
    .wow-super-button {
        width: 160px;
        height: 40px;
    }
</style>
