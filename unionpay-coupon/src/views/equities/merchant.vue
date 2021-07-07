
<template>
    <div class="merchant-wrap">
        <filter-view></filter-view>
        <div class="null"></div>
        <merchant-item v-for="item in 10" :key="item"></merchant-item>
    </div>
</template>

<script>
    import FilterView from 'src/components/FilterView'
    import MerchantItem from './components/MerchantItem'
    export default {
        components: {
            MerchantItem,
            FilterView,
        }
    }
</script>

<style lang="scss" scoped>
    @import "src/assets/scss/define";
    .null{
        height: j(12);
    }
    .merchant-wrap{
        /deep/ {
            .merchant-item{
                background-color: $color-background-light;
            }
            .merchant-item-title{
                @extend %cfff;
            }
            .merchant-item-location{
                @extend %c9;
            }
            .merchant-item-content{
                &:before{
                    border-color: #5e5e5e;
                }
            }
            .merchant-item-bar{
                background-color: #5e5e5e;
            }
        }
    }
</style>
