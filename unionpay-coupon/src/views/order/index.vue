
<template>
    <wow-view class="view-flex">
        <div class="operate">
            <van-button style="width: 100px" type="primary" @click="error = !error">{{ error ? '关闭错误' : '开启错误'}}</van-button>
        </div>
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
    import { Cell as VanCell, Button as VanButton } from 'vant'

    const fn = flag => new Promise((resolve, reject) => {
        setTimeout(() => {
            flag ? resolve({ list: new Array(10).fill('A'), total: 50 }) : reject('网络错误');
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

                error: false,
            };
        },
        created() {
            this.pagingRefresh();
        },
        methods: {
            pagingRefresh (callback) {
                this.pagingIndex = 1;
                this.pagingReqDataList(this.pagingIndex, callback);
            },
            pagingLoad (callback) {
                this.pagingReqDataList(this.pagingIndex + 1, callback);
            },
            pagingReqDataList (pagingIndex, callback) {
                this.pagingError = '';
                fn(this.error).then(res => {
                    const { list, total } = res;
                    this.pagingData = pagingIndex === 1 ? list : [...this.pagingData, ...list];
                    this.pagingTotal = total;
                    this.pagingIndex = pagingIndex;
                }).toast(err => {
                    this.pagingError = err;
                    return true;
                }).finally(() => {
                    typeof callback === 'function' && callback(this.pagingError);
                });
            },
        },
        components: {
            VanButton,
            VanCell,
        }
    }
</script>

<style>
    .operate{
        display: flex;
    }
</style>
