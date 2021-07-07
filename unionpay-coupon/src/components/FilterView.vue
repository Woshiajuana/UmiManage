
<template>
    <div class="filter-view">
        <div class="filter-cell">
            <span>上海市</span>
            <i></i>
        </div>
        <div class="filter-cell">
            <span>浦东新区</span>
            <i></i>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
    @import "src/assets/scss/define";
    .filter-view{
        @extend %df;
        @extend %aic;
        padding: 0 j(20);
        background-color: $color-background-light;
        height: j(46);
    }
    .filter-cell{
        @extend %df;
        @extend %aic;
        @extend %cp;
        margin-right: j(24);
        font-size: j(14);
        &:after{
            content: '';
            width: 0;
            height: 0;
            margin: j(5) 0 0 j(5);
            border-style: solid;
            border-width: 5px;
            border-color: #fff transparent transparent transparent;
        }
    }
</style>
