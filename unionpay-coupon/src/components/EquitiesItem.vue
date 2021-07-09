
<template>
    <div class="equities-item"
         @click="handleEnter"
         :class="['equities-item--N ' + item.status]">
        <div class="equities-item-cover">
            <img :src="item.goodsPic" alt="封面" class="equities-item-image">
        </div>
        <div class="equities-item-content">
            <h3 class="equities-item-name">{{ item.goodsName }}</h3>
            <p class="equities-item-tips">{{ item.remark }}</p>
            <p class="equities-item-time">有效期：{{ item.startDate }} - {{ item.endDate }}</p>
        </div>
        <i class="equities-item-status-icon"></i>
    </div>
</template>

<script>
    export default {
        props: { item: { default: '' }},
        methods: {
            handleEnter () {
                const { goodsId, status } = this.item;
                if (this.$enum.EQUITIES_STATUS.valueByKey.NOT_USED === status) {
                    this.$router.push({ path: '/equities/details', query: { id: goodsId } })
                }
            },
        },
    }
</script>

<style lang="scss" scoped>
    @import "src/assets/scss/define";
    .equities-item{
        @extend %df;
        @extend %aic;
        @extend %pr;
        height: j(90);
        margin: j(10);
        border-radius: j(8);
        background-color: #fff;
        &.equities-item--N{
            @extend %cp;
        }
        &.equities-item--Y{
            opacity: 0.9;
            .equities-item-cover{
                background-color: rgba(239,210,185,0.70);
                background-image: none;
            }
            .equities-item-status-icon{
                background: url("~src/assets/images/equities-status-1.png") no-repeat;
                background-size: contain;
            }
        }
        &.equities-item--E{
            opacity: 0.8;
            .equities-item-cover{
                background-color: #D1D0CE;
                background-image: none;
            }
            .equities-item-status-icon{
                background: url("~src/assets/images/equities-status-2.png") no-repeat;
                background-size: contain;
            }
        }
        &-cover{
            @extend %h100;
            @extend %df;
            @extend %aic;
            @extend %jcc;
            @extend %bsb;
            @extend %pr;
            border-radius: j(8) 0 0 j(8);
            width: j(90);
            background-image: $gradient-primary-color;
            border-right: 1px #fff dashed;
            &:before,
            &:after{
                @extend %br50;
                @extend %pa;
                content: '';
                right: j(-5);
                width: j(9);
                height: j(9);
                background-color: $color-background;
            }
            &:before{
                top: j(-4);
            }
            &:after{
                bottom: j(-4);
            }
        }
        &-image{
            @extend %db;
            width: j(68);
            height: j(68);
            border-radius: j(8);
            background-color: #f2f2f2;
        }
        &-content{
            @extend %df1;
            @extend %aic;
            @extend %jcc;
            @extend %fdc;
            padding: 0 j(30) 0 j(18);
        }
        &-name{
            @extend %c3;
            @include twno(2);
            line-height: j(20);
            font-size: j(14);
        }
        &-tips{
            @extend %c9;
            margin-top: j(4);
            line-height: j(17);
            font-size: j(12);
        }
        &-time{
            @extend %c9;
            line-height: j(17);
            font-size: j(12);
        }
        &-button{
            @extend %pa;
            @extend %df;
            @extend %cp;
            @extend %aic;
            @extend %jcc;
            top: j(12);
            right: j(12);
            width: j(56);
            height: j(26);
            border-radius: j(15);
            color: $color-primary;
            background-color: $color-background-light;
        }
        &-status-icon{
            @extend %pa;
            @extend %t0;
            @extend %r0;
            width: j(64);
            height: j(64);
        }
    }
</style>
