import { createRouter, createWebHistory } from 'vue-router'

import routes from "./routes"
import store from '@/store';

document.title = "Song Vault";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

/** auth tokens */
let tokens = store.getters["auth/GET_AUTH_TOKENS"]
/** check if route is authenticated */
function is_authenticated() {
  return tokens.access_token !== '' && tokens.refresh !== ''
}

router.beforeEach((to, from, next) => {
  document.title = `Song Vault | ${to.name}`
  
  if(to.matched.some(record => record.meta.requireAuth) && !is_authenticated()) next({name: "login"});
  else next()
})

export default router
