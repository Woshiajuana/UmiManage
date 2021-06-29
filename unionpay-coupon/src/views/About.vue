
<template>
    <div class="about">
        <h1>About</h1>
        <van-button @click="$router.go(-1)">《返回</van-button>
    </div>
</template>

<script>
    import { Button as VanButton } from 'vant'
    export default {
        components: {
            VanButton,
        }
    }
</script>

<style lang="scss">
    @import "src/assets/scss/define";
    .about{
        @extend %df;
        @extend %aic;
        @extend %fdc;
        @extend %jcc;
        font-size: j(78);
        background-color: #ffb642;
    }
</style>
