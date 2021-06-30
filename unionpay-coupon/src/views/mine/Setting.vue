
<template>
    <wow-view>
        <van-cell-group>
            <van-cell :title="$t('setting.translations')" :value="computeTranslations.name" is-link @click="show = true"/>
        </van-cell-group>
        <van-action-sheet
            v-model="show"
            :actions="computedLangOptions"
            @select="handleSelect"
            :cancel-text="$t('setting.cancel')"
            close-on-click-action
        ></van-action-sheet>
    </wow-view>
</template>

<script>
    import { Cell as VanCell, CellGroup as VanCellGroup, ActionSheet as VanActionSheet } from 'vant'
    export default {
        data() {
            return {
                show: false,
            };
        },
        computed: {
            computedLangOptions () {
                const { langOptions } = this.$i18n;
                return langOptions;
            },
            computeTranslations () {
                const { locale } = this.$i18n;
                return this.computedLangOptions.find(item => item.value === locale);
            },
        },
        methods: {
            handleSelect (item) {
                const { value } = item;
                this.$i18n.loadLanguageAsync(value, this.$route.meta);
            }
        },
        components: {
            VanCell,
            VanCellGroup,
            VanActionSheet,
        }
    }
</script>
