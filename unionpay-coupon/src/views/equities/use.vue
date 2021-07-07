
<template>
    <wow-view>
        <div class="null"></div>
        <div class="use-inner">
            <div class="header">
                <h2>洗车劵</h2>
                <p>有效期:2021.06.08-2021.06.09</p>
            </div>
            <div class="code">
                <img src="" alt="二维码" class="code-img">
                <p>兑换码：88888888888888888888</p>
            </div>
            <div class="merchant">
                <div class="merchant-head">
                    <h3>适用商户</h3>
                    <span class="merchant-more" @click="$router.push('/equities/use/merchant')">
                        查看所有
                        <i class="c-arrow right"></i>
                    </span>
                </div>
                <merchant-item v-for="(item, index) in 3" :key="index"></merchant-item>
            </div>
            <dl class="footer">
                <dt>使用须知</dt>
                <dd>使用须知使用须知使用须知使用须知使用须知使用须知使用须知使用须知使用须知使用须知</dd>
            </dl>
        </div>
    </wow-view>
</template>

<script>
    import MerchantItem from './components/MerchantItem'
    export default {
        components: {
            MerchantItem,
        }
    }
</script>

<style lang="scss" scoped>
    @import "src/assets/scss/define";
    .null{
        height: j(10);
    }
    .use-inner{
        @extend %c6;
        min-height: 100%;
        background-color: #fff;
        border-radius: j(12) j(12) 0 0;
    }
    .header{
        padding: j(12) j(20);
        h2{
            @extend %c3;
            font-size: j(16);
            line-height: j(22);
        }
        p{
            line-height: j(20);
            font-size: j(14);
            margin-top: j(4);
        }
    }
    .code{
        @extend %df;
        @extend %aic;
        @extend %fdc;
        @extend %jcc;
        margin: 0 j(20);
        padding: j(16) 0;
        border-bottom: 1px #dbdbdb dashed;
        border-top: 1px #dbdbdb dashed;
        p{
            @extend %c3;
            margin-top: j(14);
            font-size: j(16);
            line-height: j(22);
        }
    }
    .code-img{
        @extend %db;
        background-color: #f2f2f2;
        width: j(148);
        height: j(148);
    }
    .merchant{
        padding: j(12) 0;
    }
    .merchant-head{
        @extend %df;
        @extend %aic;
        @extend %jcs;
        padding: 0 j(20);
        h3{
            @extend %c3;
            @extend %fwn;
            font-size: j(16);
            line-height: j(20);
        }
    }
    .merchant-more{
        @extend %df;
        @extend %aic;
        font-size: j(12);
    }
    .footer{
        padding: j(16) 0;
        margin: 0 j(20);
        border-top: 1px #dbdbdb dashed;
        dt{
            @extend %c3;
            font-size: j(16);
            line-height: j(20);
        }
        dd{
            margin-top: j(4);
            font-size: j(12);
            line-height: j(17);
        }
    }
</style>
