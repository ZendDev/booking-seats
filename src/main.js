import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import "@/assets/scss/main.scss"
import Tooltip from '@programic/vue3-tooltip'
import '@programic/vue3-tooltip/dist/index.css'

const pinia = createPinia()

createApp(App)
    .use(router)
    .use(pinia)
    .use(Tooltip)
    .mount('#app')
