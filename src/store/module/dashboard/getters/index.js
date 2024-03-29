export default {
    GET_ARTISTS(state) {
        return state.artists
    },

    GET_ARTIST(state) {
        return state.artist
    },

    GET_ALBUMS(state) {
        return state.albums 
    },

    GET_ALBUM(state) {
        return state.album
    },

    GET_PLAYLISTS(state) {
        return state.playlists
    },

    GET_PLAYLIST(state) {
        return  state.playlist
    },

    GET_SONGS(state) {
        return state.songs
    },

    GET_SONG(state) {
        return state.song
    },

    GET_RECENT(state) {
        return state.recent
    },

    GET_PLAYING_SONGS(state) {
        return state.playingSongs
    },

    GET_SEARCHED(state) {
        return state.searched
    },
}