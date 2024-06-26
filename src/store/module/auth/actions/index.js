/* eslint-disable no-unused-vars */

import { httpAuth, httpApi } from '@/services/api.service'
import { destroyTokens } from '@/services/jwt.service'
import refreshAuthTokens from '../../../../utils/helpers'
import types from '../types/index'

const baseURL = "http://127.0.0.1:8000/api/accounts";

export default {
    authenticateUser({commit}, payload) {
        return new Promise((resolve, reject) => {
            httpAuth.post(baseURL + '/login/', payload).then(res => {
                if (res.status === 200) {
                    commit(types.UPDATE_AUTH_TOKENS, res.data.tokens);
                    commit(types.UPDATE_USER, JSON.stringify(res.data.user));
                    refreshAuthTokens();
                    resolve(res);
                }
            })
            .catch(err => {
                reject(err);
            });
        })
    },
    signUpUser({commit}, payload) {
        return new Promise((resolve, reject) =>  {
            httpAuth.post(baseURL + '/register-user/', payload).then(res => {
                if (res.status === 201) {
                    resolve(res);
                }
            })
            .catch(err => {
                reject(err);
            });
        })
    },
    signUpArtist({commit}, payload) {
        return new Promise((resolve, reject) =>  {
            httpAuth.post(baseURL + '/register-artist/', payload).then(res => {
                if (res.status === 201) {
                    resolve(res);
                }
            })
            .catch(err => {
                reject(err);
            });
        })
    },
    resetPassword({commit}, payload) {
        return new Promise((resolve, reject) =>  {
            httpAuth.post(baseURL + '/reset-password', payload).then(res => {
                if (res.status === 200) {
                    resolve(res);
                }
            })
            .catch(err => {
                reject(err);
            });
        })
    },
    changePassword({commit}, payload) {
        return new Promise((resolve, reject) =>  {
            httpAuth.post(baseURL + '/change-password', payload).then(res => {
                if (res.status === 200) {
                    resolve(res);
                }
            })
            .catch(err => {
                reject(err);
            });
        })
    },
    logout({commit}) {
        commit(types.UPDATE_AUTH_TOKENS, { access_token: "", refresh: "" });
        commit(types.UPDATE_USER, JSON.stringify({}));
        destroyTokens()
    },
    updateProfile({commit}, payload) {
        return new Promise((resolve, reject) =>  {
            httpApi.put(baseURL + `/profile/${payload.id}/`, payload).then(res => {
                if (res.status === 200) {
                    commit(types.UPDATE_USER, res.data);
                    resolve(res);
                }
            })
            .catch(err => {
                reject(err);
            });
        })
    },
    refreshToken({commit}, payload) {
        return new Promise((resolve, reject) => {
            httpAuth.post(baseURL + `/refresh_token/`, payload).then(res => {
                if (res.status === 200) {
                    commit(types.UPDATE_AUTH_TOKENS, res.data);
                    resolve(res);
                }
            })
            .catch(err => {
                reject(err);
            });
        })
    }
}