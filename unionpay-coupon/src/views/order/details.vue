
<template>
    <div>
        <div class="null1"></div>
        <ul class="content">
            <li>
                <span class="label">交易编号</span>
                <span class="value">D打扫打扫</span>
            </li>
            <li>
                <span class="label">交易编号</span>
                <span class="value">D打扫打扫</span>
            </li>
            <li>
                <span class="label">交易编号</span>
                <span class="value">D打扫打扫</span>
            </li>
            <li>
                <span class="label">交易编号</span>
                <span class="value">D打扫打扫</span>
            </li>
            <li>
                <span class="label">交易编号</span>
                <span class="value">D打扫打扫</span>
            </li>
        </ul>
        <div class="operate">
            <div class="c-button c-button-border"><span>取消订单</span></div>
            <div class="c-button"><span>支付</span></div>
        </div>
    </div>
</template>

<script>
    export default {

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
