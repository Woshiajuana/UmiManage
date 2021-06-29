
<template>
    <div class="home">
        <h1>{{ new Date() | filterDate }}</h1>
        <van-button @click="$router.push('/about')">跳转到关于页面</van-button>
        <van-button @click="handlePromise">执行异步函数</van-button>
    </div>
</template>

<script>
    import { Button as VanButton } from 'vant'

    const fn = flag => new Promise((resolve, reject) => {
        flag ? resolve(flag) : reject(flag);
    })

    export default {
        methods: {
            handlePromise () {
                fn(0).then(res => console.log(`成功=>`, res)).toast();
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
