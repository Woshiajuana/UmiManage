
<template>
    <div class="merchant-item">
        <img src="" alt="封面" class="merchant-item-image">
        <div class="merchant-item-content">
            <div class="merchant-item-info">
                <p class="merchant-item-title">一起打石婆店都</p>
                <p class="merchant-item-location">
                    <span class="merchant-item-address">浦浦东浦东浦东浦东浦东东</span>
                    <span class="merchant-item-distance">131m</span>
                </p>
            </div>
            <div class="merchant-item-bar"></div>
            <i class="iconfont icon-dingwei"></i>
            <i class="iconfont icon-lianxidianhua"></i>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
    @import "src/assets/scss/define";
    .merchant-item{
        @extend %df;
        @extend %aic;
        padding: 0 j(20);
        &:last-child{
            .merchant-item-content{
                &:before{
                    @extend %dn;
                }
            }
        }
        &-content{
            @extend %df;
            @extend %df1;
            @extend %oh;
            @extend %aic;
            @extend %bw05;
            @extend %bwb;
            height: j(66);
            padding: j(10) 0;
        }
        &-image{
            width: j(66);
            height: j(66);
            background-color: #f2f2f2;
            border-radius: j(8);
            margin-right: j(14);
        }
        &-info{
            @extend %df1;
            @extend %oh;
        }
        &-title{
            @extend %c3;
            @extend %twno;
            line-height: j(22);
            font-size: j(16);
        }
        &-location{
            @extend %df;
            @extend %aic;
            margin-top: j(12);
            line-height: j(17);
            font-size: j(12);
        }
        &-address{
            @extend %twno;
            max-width: j(114);
        }
        &-distance{
            @extend %c9;
        }
        .iconfont{
            @extend %df;
            @extend %aic;
            @extend %jcc;
            @extend %pr;
            width: j(50);
            height: j(50);
            &.icon-lianxidianhua{
                font-size: j(24);
            }
            &.icon-dingwei{
            }
        }
        &-bar{
            width: 1px;
            height: j(18);
            margin-left: j(12);
            background-color: #dbdbdb;
        }
    }
</style>
