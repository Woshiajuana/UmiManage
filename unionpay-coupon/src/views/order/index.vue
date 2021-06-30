
<template>
    <wow-view class="view-flex">
        <wow-scroll
            @refresh="handleRefresh"
            @load="handleLoad">
            <van-cell v-for="item in list" :key="item" :title="item" />
        </wow-scroll>
    </wow-view>
</template>

<script>
    import { Cell as VanCell } from 'vant'
    export default {
        data () {
            return {
                list: [],
            };
        },
        methods: {
            handleLoad () {
            },
            handleRefresh () {
            },
        },
        components: {
            VanCell,
        }
    }
</script>

<style lang="scss" scoped>
    @import "src/assets/scss/define";
</style>
