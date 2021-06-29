
<template>
    <div class="setting-wrap">
        <h1 @click="$router.go(-1)">设置</h1>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
@import "src/assets/scss/define";
    .setting-wrap {
        @extend %df;
        @extend %aic;
        @extend %jcc;
        @extend %fdc;
        font-size: j(78);
        background-color: #ff6842;
    }
</style>
