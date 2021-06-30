
<template>
    <div class="home">
        <h1>{{$t('home.title')}}</h1>
        <br/>
        <van-button></van-button>
    </div>
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
    .home {
        @extend %df;
        @extend %aic;
        @extend %jcc;
        @extend %fdc;
        font-size: j(78);
        background-color: #42bdff;
    }
</style>
