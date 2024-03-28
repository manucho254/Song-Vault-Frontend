export default {
    UPDATE_ARTISTS(state, payload) {
        state.artists = payload
    },

    UPDATE_ARTIST(state, payload) {
        state.artist = payload
    },

    UPDATE_ALBUMS(state, payload) {
        state.albums = payload
    },

    UPDATE_ALBUM(state, payload) {
        state.album = payload
    },

    UPDATE_PLAYLISTS(state, payload) {
        state.playlists = payload
    },

    UPDATE_PLAYLIST(state, payload) {
        state.playlist = payload
    },

    UPDATE_SONGS(state, payload) {
        state.songs = payload
    },

    UPDATE_SONG(state, payload) {
        state.song = payload
    },

    UPDATE_RECENT(state, payload) {
        state.recent, payload
    },

    UPDATE_PLAYING_SONGS(state, payload) {
        state.playingSongs = payload
    }
}