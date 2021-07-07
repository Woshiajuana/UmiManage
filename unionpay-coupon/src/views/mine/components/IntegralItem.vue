
<template>
    <div class="integral-item">
        <div class="integral-item-content">
            <div class="integral-item-info">
                <p class="integral-item-title">洗车券</p>
                <p class="integral-item-time">2021-06-07  09:30:30</p>
            </div>
            <span class="integral-item-number color-1">100</span>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
    @import "src/assets/scss/define";
    .integral-item{
        @extend %cp;
        background-color: $color-background-light;
        padding: 0 j(20);
        &:last-child{
            .integral-item-content{
                &:before{
                    @extend %dn;
                }
            }
        }
        &-content{
            @extend %df;
            @extend %aic;
            @extend %bw05;
            @extend %bwb;
            padding: j(12) 0;
            &:before{
                border-color: #5e5e5e;
            }
        }
        &-info{
            @extend %df1;
        }
        &-title{
            font-size: j(14);
            line-height: j(20);
        }
        &-time{
            @extend %c9;
            margin-top: j(6);
            font-size: j(12);
            line-height: j(17);
        }
        &-number{
            font-size: j(16);
            &.color-1{
                color: $color-warning;
            }
            &.color-2{
                color: #199AFF;
            }
        }
    }
</style>
