
<template>
    <div>
        <coupon-item v-for="(item, index) in 10" :key="index"></coupon-item>
    </div>
</template>

<script>
    import CouponItem from 'src/components/CouponItem'
    export default {
        components: {
            CouponItem,
        }
    }
</script>

<style lang="scss" scoped>
    @import "src/assets/scss/define";
</style>
