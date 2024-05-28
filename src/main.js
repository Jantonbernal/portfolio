import { createApp } from 'vue'
import { createPinia } from 'pinia'

import router from './router'
import vuetify from './plugins/vuetify'
import '@/plugins/axios'
import App from './App.vue'
import './assets/css/style.css'
import './assets/css/transitions.css'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(vuetify)
app.mount('#app')
