import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from "@/store"

const audio = new Audio()

audio.volume

const app = createApp(App);

app.use(router)
app.use(store)
app.mount('#app')
import 'bootstrap/dist/js/bootstrap.js'


