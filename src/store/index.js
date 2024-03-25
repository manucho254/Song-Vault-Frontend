import { createStore } from 'vuex'

import auth from './module/auth';

export default createStore ({
    modules:  {
        auth: auth,
    }
})