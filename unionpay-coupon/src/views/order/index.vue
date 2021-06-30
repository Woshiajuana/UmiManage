
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
            :finished="pagingData.length >= pagingData"
            @refresh="pagingRefresh"
            @load="pagingLoad">
            <van-cell v-for="item in pagingData" :key="item" :title="item"/>
        </wow-scroll>
    </wow-view>
</template>

<script>
    import { Cell as VanCell } from 'vant'
    export default {
        data () {
            return {
                pagingData: '',
                pagingIndex: 1,
                pagingSize: 10,
                pagingTotal: -1,
                pagingError: '',
            };
        },
        methods: {
            pagingRefresh () {

            },
            pagingLoad () {

            },
        },
        components: {
            VanCell,
        }
    }
</script>
