/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import {httpApi} from '../../../../services/api.service'
import types from '../types/index'
import  processSongs from '../../../../utils/helpers'


const baseURL = "http://127.0.0.1:8000/api";

export default {
    getSongs({commit}) {
        return new Promise((resolve, reject) => {
            httpApi.get(baseURL + '/songs/').then(res => {
                if (res.status === 200) {
                    res.data['results'] = processSongs(res.data['results'])
                    commit(types.UPDATE_SONGS, res.data);
                    resolve(res);
                }
            })
            .catch(err => {
                reject(err);
            });
        })
    },
    getSong({commit}, payload) {
        return new Promise((resolve, reject) => {
            httpApi.get(baseURL + `/songs/${payload.song_id}/`).then(res => {
                if (res.status === 200) {
                    res.data = processSongs([res.data])[0]
                    commit(types.UPDATE_SONG, res.data);
                    resolve(res);
                }
            })
            .catch(err => {
                reject(err);
            });
        })
    },
    getArtists({commit}) {
        return new Promise((resolve, reject) => {
            httpApi.get(baseURL + '/artists/').then(res => {
                if (res.status === 200) {
                    commit(types.UPDATE_ARTISTS, res.data);
                    resolve(res);
                }
            })
            .catch(err => {
                reject(err);
            });
        })
    },
    getArtist({commit}, payload) {
        return new Promise((resolve, reject) => {
            httpApi.get(baseURL + `/artists/${payload.artist_id}/`).then(res => {
                if (res.status === 200) {
                    commit(types.UPDATE_ARTIST, res.data);
                    resolve(res);
                }
            })
            .catch(err => {
                reject(err);
            });
        })
    },
    getAlbums({commit}) {
        return new Promise((resolve, reject) => {
            httpApi.get(baseURL + '/albums/').then(res => {
                if (res.status === 200) {
                    commit(types.UPDATE_ALBUMS, res.data);
                    resolve(res);
                }
            })
            .catch(err => {
                reject(err);
            });
        })
    },
    getAlbum({commit}, payload) {
        return new Promise((resolve, reject) => {
            httpApi.get(baseURL + `/albums/${payload.album_id}`).then(res => {
                if (res.status === 200) {
                    res.data['songs'] = processSongs(res.data['songs'])
                    commit(types.UPDATE_ALBUM, res.data);
                    resolve(res);
                }
            })
            .catch(err => {
                reject(err);
            });
        })
    },
    getPlaylists({commit}) {
        return new Promise((resolve, reject) => {
            httpApi.get(baseURL + '/playlists/').then(res => {
                if (res.status === 200) {
                    commit(types.UPDATE_PLAYLISTS, res.data);
                    resolve(res);
                }
            })
            .catch(err => {
                reject(err);
            });
        })
    },
    getPlaylist({commit}, payload) {
        return new Promise((resolve, reject) => {
            httpApi.get(baseURL + `/playlists/${payload.playlist_id}/`).then(res => {
                if (res.status === 200) {
                    res.data['songs'] = processSongs(res.data['songs'])
                    commit(types.UPDATE_PLAYLIST, res.data);
                    resolve(res);
                }
            })
            .catch(err => {
                reject(err);
            });
        })
    },

    searchCatalog({commit}, payload) {
        return new Promise((resolve, reject) =>  {
            httpApi.get(baseURL + `/search?query=${payload}`).then(res => {
                if (res.status === 200) {
                    res.data['songs'] = processSongs(res.data['songs'])
                    commit(types.UPDATE_SEARCHED, res.data);
                    resolve(res);
                }
            })
            .catch(err => {
                reject(err);
            });
        })
    },

}