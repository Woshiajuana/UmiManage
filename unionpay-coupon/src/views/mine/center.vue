
<template>
    <div>
        <van-cell-group>
            <van-cell></van-cell>
        </van-cell-group>
    </div>
</template>

<script>
    import { Cell, CellGroup } from 'vant'
    export default {
        components: {
            VanCell: Cell,
            VanCellGroup: CellGroup,
        }
    }
</script>

<style lang="scss" scoped>
    @import "src/assets/scss/define";
</style>
