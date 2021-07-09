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
    import { filterMessage } from 'src/utils/filters'
    import { mapActions } from 'vuex'
    export default {
        mixins: [
            TransitionMixin,
        ],
        mounted() {
            this.judgeUserStatus();
        },
        methods: {
            ...mapActions('user', [ 'actionUserLogin' ]),
            judgeUserStatus () {
                this.$user.set({
                    "access_token": "ec8f2784-9fdd-488d-8960-4dd74f475d0f",
                    "refresh_token": "997ec736-9b13-4eb9-84a5-dae4e292b9a1",
                    "license": "made by dryad",
                    "openId": "QBXYdsRfP0DYn9obQ5y2dXSXcOAZuS5vKH/F39qt3G3IpeJN07fSHc8ar4FhdwyA",
                    "credentialsNonExpired": true,
                    "enabled": true,
                    "authorities": [{
                        "authority": "ALL"
                    }],
                    "tenantId": "DB_0",
                    "accountNonExpired": true,
                    "id": "1412945132129341444",
                    "username": "13127590698",
                    "accountNonLocked": true,
                    "scope": "server",
                    "active": true,
                    "token_type": "bearer",
                    "expires_in": 43198
                });
                const user = this.$user.get();
                if (!user) {
                    this.handleUserAuthConfirm();
                }
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
                this.actionUserLogin({
                    auth_code: res ? res.code : '',
                }).catch(err => {
                    this.$dialog.confirm({
                        title: '温馨提示',
                        message: filterMessage(err),
                        cancelButtonText: '关闭页面',
                        confirmButtonText: '重新授权',
                    }).then(() => {
                        this.handleUserAuthConfirm()
                    }).catch(() => {
                        this.$upsdk.closeWebApp()
                    });
                });
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
