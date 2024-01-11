import { usePreferDark } from '@/composables'
import { kVuetify } from '@/composables/vuetify'
import { i18n } from '@/i18n'
import { vuetify } from '@/vuetify'
import 'virtual:windi.css'
import Vue, { h } from 'vue'
import App from './App.vue'
import { baseService } from './baseService'

const search = window.location.search.slice(1)
const pairs = search.split('&').map((pair) => pair.split('='))
const locale = pairs.find(p => p[0] === 'locale')?.[1] ?? 'en'
const theme = pairs.find(p => p[0] === 'theme')?.[1] ?? 'dark'

const app = new Vue(defineComponent({
  vuetify,
  i18n,
  setup(props, context) {
    provide(kVuetify, vuetify.framework)

    baseService.call('getSettings').then(state => state).then(state => {
      i18n.locale = state.locale
      updateTheme(state.theme)
      state.subscribe('localeSet', (locale) => {
        i18n.locale = locale
      })
      state.subscribe('themeSet', (theme) => {
        updateTheme(state.theme)
      })
    })

    const preferDark = usePreferDark()
    const updateTheme = (theme: string) => {
      if (theme === 'system') {
        vuetify.framework.theme.dark = preferDark.value
      } else if (theme === 'dark') {
        vuetify.framework.theme.dark = true
      } else if (theme === 'light') {
        vuetify.framework.theme.dark = false
      }
    }
    updateTheme(theme)

    return () => h(App)
  },
}))

app.$mount('#app')