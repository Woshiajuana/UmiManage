<template>
    <div id="app">
        <!--主体内容视图-->
        <transition :name="transitionName">
<!--            <keep-alive>-->
            <router-view class="view-wrap"></router-view>
<!--            </keep-alive>-->
        </transition>
    </div>
</template>

<script>
    import TransitionMixin from 'src/mixins/transition'
    export default {
        mixins: [
            TransitionMixin,
        ],
    }
</script>

<style lang="scss">
    @import "~src/assets/scss/common";
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
        overflow-y: auto;
    }
</style>
