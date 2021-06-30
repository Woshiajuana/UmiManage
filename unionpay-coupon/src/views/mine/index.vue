
<template>
    <wow-view :left-arrow="false" class="mine-wrap">
        <h1>我的</h1>
        <van-cell-group>
            <van-cell title="设置" is-link to="/setting" />
            <van-cell title="单元格" is-link value="内容" />
            <van-cell title="单元格" is-link arrow-direction="down" value="内容" />
        </van-cell-group>
    </wow-view>
</template>

<script>
    import { Cell as VanCell, CellGroup as VanCellGroup } from 'vant'
    export default {
        components: {
            VanCell,
            VanCellGroup
        }
    }
</script>

<style lang="scss" scoped>
    @import "src/assets/scss/define";
    .mine-wrap {
        font-size: j(78);
        background-color: #fff642;
    }
</style>
