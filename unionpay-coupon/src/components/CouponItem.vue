
<template>
    <div class="coupon-item">
        <img class="coupon-item-image" src="" alt="优惠劵"/>
        <div class="coupon-item-info">
            <h3 class="coupon-item-name">云闪云闪付通用卷云闪云闪付通用卷云闪付通用卷云闪云闪付通用卷云闪</h3>
            <ul class="coupon-item-types">
                <li class="coupon-item-type">通用劵</li>
                <li class="coupon-item-type">笔笔减</li>
            </ul>
            <div class="c-flex1"></div>
            <span class="coupon-item-number">800积分</span>
        </div>
        <span class="coupon-item-status">待付款</span>
        <div class="coupon-item-button c-button">
            <span>兑换</span>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
    @import "src/assets/scss/define";
    .coupon-item{
        @extend %df;
        @extend %pr;
        @extend %aic;
        @extend %bw05;
        @extend %bwb;
        margin: 0 j(10);
        padding: j(10);
        &:before{
            border-color: #5E5E5E;
        }
        &-image{
            width: j(90);
            height: j(90);
            background-color: #f2f2f2;
            border-radius: j(10);
            margin-right: j(12);
        }
        &-info{
            @extend %df1;
            @extend %df;
            @extend %fdc;
            @extend %oh;
            margin-right: j(70);
            min-height: j(80);
        }
        &-name{
            @include twno(2);
            font-size: j(14);
            line-height: j(20);
        }
        &-types{
            @extend %df;
            @extend %aic;
            margin-top: j(8);
        }
        &-type{
            @extend %df;
            @extend %aic;
            @extend %jcc;
            line-height: j(18);
            height: j(18);
            padding: 0 j(4);
            border-radius: j(2);
            font-size: j(10);
            margin-right: j(5);
            &:nth-child(1){
                background-color: #f29e20;
            }
            &:nth-child(2){
                background-color: #7DAAFF;
            }
        }
        &-number{
            color: $color-primary;
            font-size: j(12);
            margin-top: j(8);
        }
        &-button{
            @extend %pa;
            right: j(10);
            bottom: j(10);
        }
        &-status{
            @extend %pa;
            line-height: j(20);
            top: j(10);
            right: j(10);
            font-size: j(14);
        }
    }
</style>
