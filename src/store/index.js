import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist'

import auth from './module/auth';

// persist store data
const vuexLocal = new VuexPersistence({
    storage: window.localStorage
  }).plugin
   

export default createStore ({
    plugins: [vuexLocal],
    modules:  {
        auth: auth,
    },
})