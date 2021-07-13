
<template>
    <wow-view class="view-flex">
        <wow-super-box
            @refresh="pagingRefresh"
            :error="pagingError"
            v-if="pagingTotal < 1"
            :loading="pagingTotal === -1"
        ></wow-super-box>
        <wow-scroll
            v-else
            :finished="pagingData.length >= pagingTotal"
            @refresh="pagingRefresh"
            @load="pagingLoad">
            <order-item v-for="(item, index) in pagingData" :item="item" :key="index"/>
        </wow-scroll>
    </wow-view>
</template>

<script>
    import PagingMixin from 'src/mixins/paging'
    import OrderItem from './components/OrderItem'
    import { reqOrderList } from 'src/api'

    export default {
        mixins: [
            PagingMixin,
        ],
        created() {
            this.pagingRefresh();
        },
        methods: {
            pagingGetUrlParamsOptions() {
                return { fn: reqOrderList };
            }
        },
        components: {
            OrderItem,
        }
    }
</script>

