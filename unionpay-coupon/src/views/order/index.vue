
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

    const fn = flag => new Promise((resolve, reject) => {
        setTimeout(() => {
            flag ? resolve({ list: new Array(10).fill('A'), total: 30 }) : reject('网络错误');
        }, 1000)
    });

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
            pagingReqDataList (pagingIndex, callback) {
                fn(true).then(res => {
                    const { list, total } = res;
                    this.pagingData = pagingIndex === 1 ? list : [...this.pagingData, ...list];
                    this.pagingTotal = total;
                    callback();
                }).toast(err => {
                    callback(err);
                }).finally(() => {

                });
            },
        },
        components: {
            VanCell,
        }
    }
</script>
