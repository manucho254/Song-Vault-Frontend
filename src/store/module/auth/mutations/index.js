import { saveTokens } from "@/services/jwt.service"


export default {
    UPDATE_USER(state, payload){
        state.user = payload
    },

    UPDATE_AUTH_TOKENS(state, payload) {
        state.authTokens = payload
        saveTokens(payload)
    }
}