
<template>
    <wow-view>
        <wow-super-box
            @refresh="fetchData"
            :error="error"
            v-if="!objData"
        ></wow-super-box>
        <template v-else>
            <div class="null1"></div>
            <div class="details-inner">
                <div class="header">
                    <h2 class="integral">
                        <i class="iconfont icon-jifen2"></i>
                        {{ objData.price }} 积分
                    </h2>
                    <h3 class="name">{{ objData.name }}</h3>
                </div>
                <div class="content">
                    <ul class="prompt">
                        <li>
                            <i class="iconfont icon-shijian"></i>
                            <span>{{ objData.startDate }} - {{ objData.endDate }}</span>
                        </li>
                        <li>
                            <i class="iconfont icon-icon_yinhangqia"></i>
                            <span>银联62开头银行卡，借记卡以及信用卡</span>
                        </li>
                        <li>
                            <i class="iconfont icon-zhangdan"></i>
                            <span>云闪付APP支付、二维码交易</span>
                        </li>
                    </ul>
                    <img :src="objData.pic" alt="封面" class="cover-image"/>
                    <dl class="info">
                        <dt>详情</dt>
                        <dd>{{ objData.detailDesc }}</dd>
                        <dt>活动规则</dt>
<!--                        <dd>{{ 这是一段活动规则，这是一段活动规则，这是一段活动规则这是一段活动规则，这是一段活动规则，这是一段活动规则，这是一段活动规则，这是一段活动规则。 }}</dd>-->
                    </dl>
                </div>
            </div>
            <div class="footer">
                <div class="c-button c-button-large" @click="handleSubmit">
                    <span>立即兑换</span>
                </div>
                <div class="c-ios-seat"></div>
            </div>
        </template>
    </wow-view>
</template>

<script>
    import { doEquitiesExchange, reqEquitiesInfo } from 'src/api'
    export default {
        data () {
            return {
                objData: '',
                error: '',
            }
        },
        created() {
            this.fetchData();
        },
        methods: {
            fetchData () {
                this.error = '';
                reqEquitiesInfo({
                    id: this.$route.query.id,
                }).then(res => {
                    this.objData = res;
                }).toast(err => {
                    this.error = err
                    return true
                })
            },
            handleSubmit () {
                const { id: goodsId } = this.computedData;
                doEquitiesExchange({
                    goodsId,
                    quantity: 1,
                }).then(() => {

                }).toast()
            },
        }
    }
</script>

<style lang="scss" scoped>
    @import "src/assets/scss/define";
    .null1{
        height: j(10);
    }
    .details-inner{
        @extend %ma;
        background-color: #fff;
        width: j(335);
        border-radius: j(8);
    }
    .header{
        @extend %pr;
        padding: j(22) j(20);
        border-radius: j(8) j(8) 0 0;
        background: $gradient-primary-color;
        border-bottom: 2px #fff dashed;
        &:before,
        &:after{
            @extend %br50;
            @extend %pa;
            content: '';
            width: j(12);
            height: j(12);
            bottom: j(-6);
            background-color: $color-background;
        }
        &:before{
            left: j(-6);
        }
        &:after{
            right: j(-6);
        }
    }
    .integral{
        @extend %c3;
        font-size: j(20);
        line-height: j(28);
    }
    .name{
        @extend %c6;
        font-size: j(14);
        margin-top: j(6);
        line-height: j(20);
    }
    .content{
        @extend %c6;
        padding: j(20);
    }
    .prompt{
        font-size: j(12);
        li{
            @extend %df;
            margin-bottom: j(6);
            &:last-child{
                margin-bottom: 0;
            }
        }
        span{
            @extend %df1;
            @extend %oh;
            line-height: j(17);
        }
        .iconfont{
            margin-right: j(10);
            font-size: j(18);
            margin-top: j(-6);
        }
    }
    .cover-image{
        @extend %db;
        width: j(295);
        height: j(128);
        margin-top: j(20);
        background-color: #f2f2f2;
        border-radius: j(8);
    }
    .info{
        margin-top: j(38);
        border-top: 1px #999 dashed;
        dt{
            @extend %fwb;
            @extend %c3;
            line-height: j(20);
            font-size: j(14);
            margin-top: j(16);
        }
        dd{
            margin-top: j(4);
            font-size: j(12);
            line-height: j(17);
        }
    }
    .footer{
        @extend %pf;
        @extend %b0;
        @extend %w100;
        @extend %l0;
        padding: j(12) 0;
        background-color: $color-background-light;
    }
</style>
