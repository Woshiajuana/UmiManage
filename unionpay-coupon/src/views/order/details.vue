
<template>
    <wow-view>
        <div class="null1"></div>
        <ul class="content">
            <li>
                <span class="label">交易编号</span>
                <span class="value">{{ computedData.orderSn }}</span>
            </li>
            <li>
                <span class="label">状态</span>
                <span class="value">已完成</span>
            </li>
            <li>
                <span class="label">名称</span>
                <span class="value">{{ computedData.name }}</span>
            </li>
            <li>
                <span class="label">积分</span>
                <span class="value">{{ computedData.payPoint }}</span>
            </li>
            <li>
                <span class="label">下单时间</span>
                <span class="value">{{ computedData.createdTime }}</span>
            </li>
            <li>
                <span class="label">支付时间</span>
                <span class="value">{{ computedData.paymentTime }}</span>
            </li>
        </ul>
<!--        <div class="operate">-->
<!--            <div class="c-button c-button-border"><span>取消订单</span></div>-->
<!--            <div class="c-button"><span>支付</span></div>-->
<!--        </div>-->
    </wow-view>
</template>

<script>
    export default {
        created() {
            console.log(this.$route.query)
        },
        computed: {
            computedData () {
                return this.$route.query
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "src/assets/scss/define";
    .null1{
        height: j(12);
    }
    .content{
        padding: j(12) j(20);
        background-color: $color-background-light;
        li{
            @extend %df;
            @extend %aic;
            @extend %jcs;
            font-size: j(14);
            line-height: j(30);
        }
    }
    .label{
    }
    .value{
        @extend %c9;
    }
    .operate{
        @extend %df;
        @extend %jce;
        padding: j(12) j(20);
        .c-button{
            margin-left: j(16);
        }
    }
</style>
