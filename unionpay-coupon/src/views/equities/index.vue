
<template>
    <van-tabs
        class="c-van-tabs"
        v-model="active">
        <van-tab
            :title="item.title"
            v-for="(item, index) in arrData"
            :key="index">
            <tab-content
                :params="item"
            ></tab-content>
        </van-tab>
    </van-tabs>
</template>

<script>
    import { Tabs as VanTabs, Tab as VanTab } from 'vant'
    import TabContent from './components/TabContent'

    export default {
        data() {
            return {
                active: 0,
                arrData: [
                    { title: '全部' },
                    { title: '未使用' },
                    { title: '已使用' },
                    { title: '已过期' },
                ]
            };
        },
        components: {
            VanTab,
            VanTabs,
            TabContent,
        }
    }
</script>
