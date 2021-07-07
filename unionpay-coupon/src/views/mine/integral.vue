
<template>
    <div>
        <filter-view></filter-view>
        <div class="null"></div>
        <integral-item v-for="item in 10" :key="item"></integral-item>
    </div>
</template>

<script>
    import FilterView from 'src/components/FilterView'
    import IntegralItem from './components/IntegralItem'
    export default {
        components: {
            IntegralItem,
            FilterView,
        }
    }
</script>

<style lang="scss" scoped>
    @import "src/assets/scss/define";
    .null{
        height: j(12);
    }
</style>
