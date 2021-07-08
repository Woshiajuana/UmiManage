
<template>
    <div>
        <coupon-item
            v-for="item in pagingData"
            :key="item.id"
        ></coupon-item>
    </div>
</template>

<script>
    import CouponItem from 'src/components/CouponItem'
    import { reqEquitiesList } from 'src/api'
    import PagingMixin from 'src/mixins/paging'
    export default {
        mixins: [
            PagingMixin,
        ],
        props: {
            categoryId: { default: '' },
        },
        created() {
            this.pagingRefresh();
        },
        methods: {
            pagingGetUrlParamsOptions() {
                return { fn: reqEquitiesList, params: { categoryId: this.categoryId } }
            },
        },
        components: {
            CouponItem,
        }
    }
</script>

<style lang="scss" scoped>
    @import "src/assets/scss/define";
</style>
