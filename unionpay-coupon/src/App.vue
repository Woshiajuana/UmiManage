<template>
    <div id="app">
        <!--主体内容视图-->
        <transition :name="transitionName">
<!--            <keep-alive>-->
            <router-view class="view-wrap" :key="$route.path"></router-view>
<!--            </keep-alive>-->
        </transition>
        <UPButton ref="button" @click="handleUserAuth" scope="scope.mobile" style="display: none"/>
    </div>
</template>

<script>
    import TransitionMixin from 'src/mixins/transition'
    import { doUserLogin } from 'src/api'
    export default {
        mixins: [
            TransitionMixin,
        ],
        mounted() {
            this.judgeUserStatus();
        },
        methods: {
            judgeUserStatus () {
                this.$upsdk.appletAuth().then(res => {
                    console.log(`返回的code => `, res);
                    return doUserLogin({ auth_code: res.code });
                    // setTimeout(this.handleUserAuthConfirm.bind(this), 300)
                }).then(res => {
                    console.log(res);
                }).toast();
            },
            handleUserAuthConfirm () {
                this.$refs.button.handleClick()
            },
            handleUserAuth (e, err, res) {
                if (err) {
                    this.$dialog.confirm({
                        title: '温馨提示',
                        message: `拒绝授权将无法进行更多操作，请确认`,
                        cancelButtonText: '关闭页面',
                        confirmButtonText: '重新授权',
                    }).then(() => {
                        this.handleUserAuthConfirm()
                    }).catch(() => {
                        this.$upsdk.closeWebApp()
                    })
                    return null
                }
                // 登录成功
                console.log(`授权成功 => `, res)
                doUserLogin({ auth_code: res.code });
            }
        },
    }
</script>

<style lang="scss">
    @import "src/assets/scss/base";
    html,
    body{
        @extend %h100;
        @extend %w100;
        @extend %oh;
    }
    #app{
        @extend %w100;
        @extend %h100;
    }
    .view-wrap{
        @extend %pa;
        @extend %t0;
        @extend %l0;
        @extend %r0;
        @extend %b0;
        @extend %bsb;
        @extend %cfff;
        overflow-y: auto;
    }
    .view-flex{
        @extend %df;
        @extend %df1;
        @extend %fdc;
        @extend %oh;
    }
    .view-flex1{
        @extend %df1;
    }
    .c-ios-seat{
        height: constant(safe-area-inset-bottom);
        height: env(safe-area-inset-bottom);
    }
    .c-van-tabs{
        @extend %df;
        @extend %df1;
        @extend %fdc;
        @extend %oh;
        .van-tabs__content{
            @extend %df1;
            @extend %oh;
            .van-tab__pane{
                @extend %h100;
                .view-flex{
                    @extend %h100;
                }
            }
        }
        .van-tabs__nav{
            background-color: $color-background-light;
        }
        .van-tab{
            color: #999;
        }
        .van-tab--active{
            color: #fff;
        }
        .van-tabs__line{
            background-image: $gradient-primary-color;
        }
    }
</style>
