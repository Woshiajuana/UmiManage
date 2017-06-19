<template>
    <router-view></router-view>
</template>
<script>
    export default {
        name: 'permission'
    }
</script>
<style lang="scss">
    @import "../../assets/scss/define";
    .container-inner{
        @extend %pa;
        @extend %r0;
        @extend %b0;
        @extend %l0;
        @extend %t0;
        @extend %oya;
        padding: 0 30px 80px;
        .el-breadcrumb{
            @extend %f14;
            @include br(4px);
            height: 36px;
            line-height: 36px;
            padding: 0 15px;
            margin: 20px 0;
            background-color: #f5f5f5;
            span{
                color: #777;
            }
        }
    }
    .pagination-wrap{
        z-index: 1;
        @extend %pa;
        @extend %r0;
        @extend %b0;
        @extend %l0;
        @extend %tac;
        right: 18px;
        padding: 10px 0 20px;
        background-color: rgba(255,255,255,.9);
    }
    .operate-wrap{
        margin-bottom: 20px;
    }

</style>
