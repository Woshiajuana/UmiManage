
<template>
    <van-empty
        class="wow-super-box"
        :image="error ? 'error' : 'default'"
        :description="error ? error : loading ? '' : $t('emptyText')">
        <template v-if="loading && !error" #image>
            <van-loading
                class="wow-super-loading"
                vertical
                size="40"
                color="#0094ff"
                text-color="#0094ff"
            >{{ $t('loadingText') }}</van-loading>
        </template>
        <van-button
            v-if="error"
            @click="$emit('refresh')"
            round
            type="danger"
            class="wow-super-button"
        >{{ $t('retryText') }}</van-button>
    </van-empty>
</template>

<script>
    import { Empty as VanEmpty, Button as VanButton, Loading as VanLoading } from 'vant'

    export default {
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
        },
        components: {
            VanEmpty,
            VanLoading,
            VanButton,
        }
    }
</script>

<style lang="scss" scoped>
    @import "src/assets/scss/define";
    .wow-super-box{
        //@extend %pa;
        @extend %w100;
        padding: j(300) 0;
    }
    .wow-super-loading{
        @extend %df;
        @extend %aic;
        @extend %jcc;
        @extend %h100;
    }
    .wow-super-button {
        width: 160px;
        height: 40px;
    }
</style>
