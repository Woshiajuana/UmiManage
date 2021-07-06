
<template>
    <div class="more-warp">
        <van-sidebar v-model="current">
            <van-sidebar-item v-for="(item, index) in arrData" :key="index" :title="item" />
        </van-sidebar>
        <more-content
            class="more-inner"
            v-for="(item, index) in arrData"
            :key="index"
            :is-visible="index === current"
        ></more-content>
    </div>
</template>

<script>
    import { Sidebar, SidebarItem } from 'vant'
    import MoreContent from './components/MoreContent'
    export default {
        data() {
            return {
                current: 0,
                arrData: [
                    '热门推荐', '全部', '充值卡', '代金劵', '权益', '会员', '其他',
                    '热门推荐', '全部', '充值卡', '代金劵', '权益', '会员', '其他',
                ]
            };
        },
        components: {
            MoreContent,
            VanSidebar: Sidebar,
            VanSidebarItem: SidebarItem,
        }
    }
</script>

<style lang="scss" scoped>
    @import "src/assets/scss/define";
    .more-warp{
        @extend %oh;
        @extend %df;
        /deep/ {
            .van-sidebar{
                @extend %h100;
                background-color: $color-background-light;
            }
            .van-sidebar-item{
                @extend %c9;
                background-color: transparent;
            }
            .van-sidebar-item--select{
                color: $color-primary;
                &:before{
                    background-color: $color-primary;
                }
            }
        }
    }
    .more-inner{
        @extend %df1;
        @extend %h100;
        margin-left: j(14);
        background-color: $color-background-light;
    }
</style>
