
<template>
    <wow-view class="more-warp">
        <wow-super-box
            @refresh="fetchData"
            :error="error"
            v-if="!arrData"
        ></wow-super-box>
        <template v-else>
            <van-sidebar v-model="current">
                <van-sidebar-item v-for="(item, index) in arrData" :key="index" :title="item.name" />
            </van-sidebar>
            <more-content
                class="more-inner"
                v-for="(item, index) in arrData"
                :key="index"
                :category-id="item.id"
                :is-visible="index === current"
            ></more-content>
        </template>
    </wow-view>
</template>

<script>
    import { Sidebar, SidebarItem } from 'vant'
    import MoreContent from './components/MoreContent'
    import { reqEquitiesType } from 'src/api'
    export default {
        data() {
            return {
                current: 0,
                error: '',
                arrData: ''
            };
        },
        created () {
            this.fetchData();
        },
        methods: {
            fetchData () {
                reqEquitiesType().then(res => this.arrData = res.details).toast((err, msg) => {
                    this.error = msg
                    return true
                })
            },
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
