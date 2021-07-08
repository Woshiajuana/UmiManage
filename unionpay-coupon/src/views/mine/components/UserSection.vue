
<template>
    <div class="user-section">
        <div class="user-info">
            <img src="~src/assets/images/defaultFace013x.png" alt="头像" class="user-avatar">
            <span>{{ userInfo.username | filterPhone }}</span>
        </div>
        <ul class="user-data">
            <li class="user-data-item">
                <span class="user-data-value">{{ userInfo.balance || 0 }}</span>
                <span class="user-data-label">优惠券</span>
            </li>
            <li class="user-data-bar"></li>
            <li class="user-data-item">
                <span class="user-data-value">{{ userInfo.count || 0 }}</span>
                <span class="user-data-label">积分</span>
            </li>
        </ul>
        <router-link to="/integral" class="user-link-button">
            <span>积分记录</span>
        </router-link>
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        computed: {
            ...mapState('user', ['userInfo'])
        }
    }
</script>

<style lang="scss" scoped>
    @import "src/assets/scss/define";
    .user-section{
        @extend %ma;
        @extend %pr;
        @extend %df;
        @extend %jcs;
        @extend %fdc;
        @extend %bsb;
        padding: j(16) 0;
        width: j(335);
        height: j(150);
        border-radius: j(8);
        background-image: $gradient-primary-color;
    }
    .user-info{
        @extend %df;
        @extend %aic;
        @extend %c3;
        line-height: j(22);
        font-size: j(16);
        padding: 0 j(16);
    }
    .user-avatar{
        @extend %bsb;
        @extend %br50;
        margin-right: j(10);
        border: 2px solid #fff;
        background-color: #ddd;
        width: j(52);
        height: j(52);
    }
    .user-data{
        @extend %df;
        @extend %aic;
        padding: 0 j(16);
        &-item{
            @extend %df;
            @extend %fdc;
            @extend %aic;
            width: j(90);
        }
        &-value{
            @extend %c3;
            font-size: j(18);
        }
        &-label{
            @extend %c6;
            font-size: j(14);
        }
        &-bar{
            width: 1px;
            height: j(18);
            background-color: #b1b1b1;
        }
    }
    .user-link-button{
        @extend %df;
        @extend %aic;
        @extend %jcc;
        @extend %cp;
        @extend %pa;
        right: j(16);
        bottom: j(16);
        width: j(72);
        border-radius: j(13);
        height: j(26);
        color: $color-primary;
        background-color: $color-background-light;
    }
</style>
