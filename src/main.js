import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import './style.css'
import App from './App.vue'
import en from './locales/en.json'
import tw from './locales/zh-TW.json'

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('locale') ?? 'en',
  fallbackLocale: 'en',
  messages: {
    'en': en,
    'zh-TW': tw
  }
})

createApp(App).use(i18n).mount('#app')
