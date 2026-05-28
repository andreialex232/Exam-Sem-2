import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createHead } from '@unhead/vue/client'
import { createI18n } from 'vue-i18n'
import './style.css'

import en from './locales/en.json'
import de from './locales/de.json'
import da from './locales/da.json'

const head = createHead()

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('user-locale') || 'en', 
  fallbackLocale: 'en',
  messages: { en, de, da }
})

const app = createApp(App)

app.use(router)
app.use(head)
app.use(i18n)

app.mount('#app')
