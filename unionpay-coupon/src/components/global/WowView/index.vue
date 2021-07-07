
<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
    import TabbarRoute from 'src/router/modules/tabbar'

    export default {
        props: {
            navBackgroundColor: { type: String, default: '0xFF1F1D1C' },
        },
        created () {
            const { path } = this.$route;
            const routes = TabbarRoute[0].children.map(item => item.path);
            this.$upsdk.setTitleStyle({
                 // 可选，导航栏(含状态栏)背景色及透明度。16进制，前2位(8F)透明度，后六位(FFFFFF)颜色，仅对当前页有效，其余页还是申请配置的导航默认颜色。
                navBackgroundColor: this.navBackgroundColor,
                appletStyle: 'white', //可选，black-黑色主题，white-白色主题。
                backBtnVisible: routes.includes(path.substring(1)) ? '0' : '1', // 可选，左侧返回按钮是否显示。’0’不显示，’1’显示，不传或空则默认显示
            //     appletTitleBarVisible: '1', // 可选，标题栏是否显示。’0’不显示，’1’显示，默认显示
            //     appletTitleGradientOrient: 'top', // 可选，渐变色方向，支持top、bottom、left、right
            //     appletTitleGradientStartColor: 0xFFFF0000,//渐变起始颜色
            //     appletTitleGradientEndColor: '0xFFFFFFFF', //渐变结束颜色
            });
        },
    }
</script>
