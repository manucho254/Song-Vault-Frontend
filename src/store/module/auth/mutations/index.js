export default {
    updateUser(state, payload){
        state.user = payload;
    },
    updateAuthTokens(state, payload) {
        state.authTokens = payload
    }
}