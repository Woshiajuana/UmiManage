
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import axios from 'axios'
import messages from './lang/zh-CN'

Vue.use(VueI18n)

const DEFAULT_LANG = 'zh-CN'
const locale = getLocale()
const $$LOCALE_LANG = '$$LOCALE_LANG'
const loadedLanguages = [$$LOCALE_LANG] // 我们的预装默认语言

const i18n = new VueI18n({
    locale,
    fallbackLocale: locale,
    messages: {
        [locale]: messages,
    },
});

function setI18nLanguage (lang) {
    i18n.locale = lang
    window.localStorage.setItem($$LOCALE_LANG, lang);
    const l = lang.split('-')[0]
    axios.defaults.headers.common['Accept-Language'] = l
    document.querySelector('html').setAttribute('lang', l)
    return lang
}

export function loadLanguageAsync(lang = getLocale()) {
    // 如果语言相同
    if (i18n.locale === lang) {
        return Promise.resolve(setI18nLanguage(lang))
    }
    // 如果语言已经加载
    if (loadedLanguages.includes(lang)) {
        return Promise.resolve(setI18nLanguage(lang))
    }
    // 如果尚未加载语言
    return import(/* webpackChunkName: "lang-[request]" */ `src/locale/lang/${lang}.js`).then(
        messages => {
            i18n.setLocaleMessage(lang, { [lang]: messages.default })
            loadedLanguages.push(lang)
            return setI18nLanguage(lang)
        }
    );
}

export function getLocale () {
    return window.localStorage.getItem($$LOCALE_LANG) || DEFAULT_LANG;
}

i18n.getLocale = getLocale;
i18n.loadLanguageAsync = loadLanguageAsync;

console.log('i18n => ', i18n.messages);

export default i18n;
