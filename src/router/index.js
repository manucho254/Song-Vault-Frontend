import { createRouter, createWebHistory } from 'vue-router'

import routes from "./routes"

document.title = "Song Vault";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
