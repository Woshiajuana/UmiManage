
<template>
    <div class="view-flex tab-content">
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
            <equities-item
                v-for="item in pagingData"
                :key="item.id"
                :item="item"
            ></equities-item>
        </wow-scroll>
    </div>
</template>

<script>
    import EquitiesItem from 'src/components/EquitiesItem'
    import PagingMixin from 'src/mixins/paging'
    import { reqEquitiesCouponList } from 'src/api'

    export default {
        mixins: [
            PagingMixin,
        ],
        props: {
            params: { default: '' },
        },
        created() {
            this.pagingRefresh();
        },
        methods: {
            pagingGetUrlParamsOptions() {
                return { fn: reqEquitiesCouponList, params: { status: this.params.status } };
            }
        },
        components: {
            EquitiesItem,
        },
    }
</script>
