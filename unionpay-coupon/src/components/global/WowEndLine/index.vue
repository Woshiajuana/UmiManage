
<template>
    <p class="wow-end-line">
        <slot>我也是有底线的</slot>
    </p>
</template>

<script>
    export default {}
</script>

<style lang="scss" scoped>
    @import "src/assets/scss/define";
    .wow-end-line{
        @extend %df;
        @extend %aic;
        @extend %jcc;
        @extend %c9;
        padding: j(20) 0;
        font-size: j(12);
        &:before,
        &:after{
            content: '';
            width: j(50);
            height: 1px;
            margin: 0 j(20);
            background-color: #666;
        }
    }
</style>
