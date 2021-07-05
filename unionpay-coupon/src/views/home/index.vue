
<template>
    <wow-view class="home-wrap">
        <h1>{{$t('home.title')}}</h1>
        <br/>
        <van-button></van-button>
    </wow-view>
</template>

<script>
    import { Button as VanButton } from 'vant'
    export default {
        methods: {
            handleSwitch () {

            }
        },
        components: {
            VanButton,
        }
    }
</script>

<style lang="scss">
    @import "src/assets/scss/define";
    .home-wrap{
        background-image: linear-gradient(180deg, rgba(46,46,56,0.20) 1%, #1F1D1C 100%);
    }
</style>
