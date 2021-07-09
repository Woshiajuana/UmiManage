
<template>
    <div class="coupon-item">
        <img class="coupon-item-image" :src="item.pic" alt="优惠劵"/>
        <div class="coupon-item-info">
            <h3 class="coupon-item-name">{{ item.name }}</h3>
            <ul class="coupon-item-types" v-if="computedAttrs.length">
                <li class="coupon-item-type" v-for="attr in computedAttrs" :key="attr.id">{{ item.attributeName }}</li>
            </ul>
<!--            <p class="coupon-item-tips">4S店通用补漆一次</p>-->
            <div class="c-flex1"></div>
            <span class="coupon-item-number">{{item.price}}积分</span>
        </div>
        <span class="coupon-item-status">待付款</span>
        <div class="coupon-item-button c-button"
             @click="$router.push({ path: '/equities/details', query: { id: item.id } })">
            <span>兑换</span>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            computedAttrs () {
                return this.item.attributeList || [];
            }
        },
        props: { item: { default: '' } }
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
            line-height: j(17);
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
        &-tips{
            @include twno(1);
            font-size: j(10);
            color: #D6D6D6;
            margin-top: j(4);
            line-height: j(14);
        }
    }
</style>
