
<template>
    <wow-view class="view-flex">
        <filter-view
            @refresh="pagingRefresh"
            :obj-filter="objFilter"
        ></filter-view>
        <div class="null"></div>
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
            <integral-item v-for="(item, index) in pagingData" :item="item" :key="index"/>
        </wow-scroll>
    </wow-view>
</template>

<script>
    import FilterView from 'src/components/FilterView'
    import IntegralItem from './components/IntegralItem'
    import PagingMixin from 'src/mixins/paging'
    import { reqIntegralList } from 'src/api'

    export default {
        mixins: [
            PagingMixin,
        ],
        data () {
            return {
                objFilter: {
                    month: {
                        value: '',
                        is: false,
                        label: '选择日期',
                        element: 'datetime',
                    }
                }
            }
        },
        created() {
            this.pagingRefresh();
        },
        methods: {
            pagingGetUrlParamsOptions() {
                const { value } = this.objFilter.month;
                const params = {};
                if (value) {
                    params.month = value.replace(/-/g, '')
                }
                return { fn: reqIntegralList, params };
            }
        },
        components: {
            IntegralItem,
            FilterView,
        }
    }
</script>

<style lang="scss" scoped>
    @import "src/assets/scss/define";
    .null{
        height: j(12);
    }
</style>
