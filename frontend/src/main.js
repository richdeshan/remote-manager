import { createApp } from 'vue'
import App from './App.vue'

// Vuetify setup
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Element Plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// Oh Vue Icons
import { OhVueIcon, addIcons } from "oh-vue-icons"
import {
  FaFlag,
  FaServer,
  FaFolder,
  FaClock,
  RiCodeView,
  RiZhihuFill,
  PxServer
} from "oh-vue-icons/icons"

// Tambahkan semua ikon ke OhVueIcon
addIcons(FaFlag, FaServer, FaFolder, FaClock, RiCodeView, RiZhihuFill, PxServer)

// Element Plus Icons
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// Vuetify instance
const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
  },
})

// App instance
const app = createApp(App)

// Daftarkan semua ikon dari Element Plus
Object.entries(ElementPlusIconsVue).forEach(([key, component]) => {
  app.component(key, component)
})

// Gunakan plugin dan daftarkan OhVueIcon dengan nama 'v-icon' agar konsisten
app.use(vuetify)
   .use(ElementPlus)
   .component('v-icon', OhVueIcon)
   .mount('#app')
