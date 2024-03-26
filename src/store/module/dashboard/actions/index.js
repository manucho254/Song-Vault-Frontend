/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import httpAuth from '../../../../services/api.service'
import types from '../types/index'

const baseURL = process.env.BASE_URL;

export default {
    fetchUser ({commit}) {
        return new Promise((resolve, reject) => {
            commit("setUser")
            resolve();
            console.log(reject);
        })
    },
    authenticateUser({commit}, payload) {
        return new Promise((resolve, reject) => {
            httpAuth.post(baseURL + '/login', payload).then(res => {
                if (res.status === 200) {
                    commit(types.UPDATE_USER_TOKEN, res.data);
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
            httpAuth.post(baseURL + '/register', payload).then(res => {
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
            httpAuth.post(baseURL + '/artists', payload).then(res => {
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


}