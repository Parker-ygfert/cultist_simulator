import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import './assets/styles/reset.css'
import Popper from 'vue3-popper'
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

const app = createApp(App)
app.use(i18n)
   .component('Popper', Popper)
   .mount('#app')
