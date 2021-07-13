
<template>
    <div class="filter-view">
        <template v-for="(item, key) in objFilter" >
            <div class="filter-cell" @click="item.is = true" :key="key">
                <span>{{ item.value || item.label }}</span>
                <i></i>
            </div>
            <van-popup
                :key="key + 'popup'"
                v-if="item.element === 'datetime'"
                v-model="item.is"
                round
                position="bottom">
                <van-datetime-picker
                    type="year-month"
                    title="选择年月日"
                    @confirm="handleDateTimeConfirm(item, $event)"
                    @cancel="item.is = false"
                ></van-datetime-picker>
            </van-popup>
        </template>
    </div>
</template>

<script>
    import { Popup, DatetimePicker } from 'vant'
    import { filterDate } from 'src/utils/filters'
    export default {
        props: {
            objFilter: { default: () => ({})}
        },
        methods: {
            handleDateTimeConfirm (item, value) {
                item.value = filterDate(value, 'yyyy-MM')
                item.is = false
            }
        },
        components: {
            VanPopup: Popup,
            VanDatetimePicker: DatetimePicker,
        }
    }
</script>

<style lang="scss" scoped>
    @import "src/assets/scss/define";
    .filter-view{
        @extend %df;
        @extend %aic;
        padding: 0 j(20);
        background-color: $color-background-light;
        height: j(46);
    }
    .filter-cell{
        @extend %df;
        @extend %aic;
        @extend %cp;
        margin-right: j(24);
        font-size: j(14);
        &:after{
            content: '';
            width: 0;
            height: 0;
            margin: j(5) 0 0 j(5);
            border-style: solid;
            border-width: 5px;
            border-color: #fff transparent transparent transparent;
        }
    }
</style>
