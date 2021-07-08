
<template>
    <van-loading class="wow-loading" size="24px">加载中...</van-loading>
</template>

<script>
    import { Loading } from 'vant'
    export default {
        components: {
            VanLoading: Loading,
        }
    }
</script>

<style lang="scss" scoped>
    @import "src/assets/scss/define";
    .wow-loading{
        @extend %df;
        @extend %aic;
        @extend %jcc;
        padding: j(20) 0;
    }
</style>
