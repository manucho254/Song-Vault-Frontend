import './assets/main.css'

// third party css
import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import 'vue-toast-notification/dist/theme-bootstrap.css';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from "@/store"

// third party apps
import ToastPlugin from 'vue-toast-notification';


const app = createApp(App);

app.use(ToastPlugin);
app.use(router)
app.use(store)
app.mount('#app')
import 'bootstrap/dist/js/bootstrap.js'


