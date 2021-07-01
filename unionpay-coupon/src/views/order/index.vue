
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
            <van-cell v-for="(item, index) in pagingData" :key="index" :title="item" :value="index"/>
        </wow-scroll>
    </wow-view>
</template>

<script>
    import { Cell as VanCell } from 'vant'
    import PagingMixin from 'src/mixins/paging'

    const fn = ({ pageIndex }) => new Promise((resolve, reject) => {
        setTimeout(() => {
            pageIndex <= 2 ? resolve({ list: new Array(10).fill('A'), total: 50 }) : reject('网络错误');
        }, 1000)
    });

    export default {
        mixins: [
            PagingMixin,
        ],
        created() {
            this.pagingRefresh();
        },
        methods: {
            pagingGetUrlParamsOptions() {
                return { fn };
            }
        },
        components: {
            VanCell,
        }
    }
</script>

