<script>
import { mapGetters } from 'vuex'

export default {
  name: 'playlistView',
  data() {
    return {
      data: { songs: [] },
      baseURL: 'http://127.0.0.1:8000/'
    }
  },
  methods: {
    getPlaylist() {
      this.$store
        .dispatch('dashboard/getPlaylist', this.$route.params)
        .then((res) => {
          this.data = res.data
        })
        .catch((err) => console.log(err))
    },
    playSongs() {
      let songs = []

      if (this.data) {
        for (let song of this.data.songs) {
          let data = {
            title: song.title,
            artist: song.artist.user.username,
            image: song.song_media[0].image,
            file: `${this.baseURL}${song.song_media[0].file}`,
            autoplay: true,
          }
          songs.push(data)
        }
      }
      this.$store.commit('dashboard/UPDATE_PLAYING_SONGS', songs)
      this.$router.go()
    }
  },
  mounted() {
    this.getPlaylist()
  },
  computed: {
    ...mapGetters({
      GET_PLAYLIST: 'dashboard/GET_PLAYLIST'
    })
  }
}
</script>
<template>
  <div class="playlist d-flex flex-column gap-3">
    <div class="d-flex gap-3 single-header">
      <div>
        <img
          class="img-fluid w-100 h-50"
          src="../../assets/images/playlist-bg.jpg"
          alt="playlist image"
        />
      </div>
      <div class="d-flex flex-column">
        <span class="song-title"
          ><span class="fw-bold">Playlist:</span> {{ GET_PLAYLIST.name }}</span
        >
        <span class="song-artist">{{ GET_PLAYLIST.user.username }}</span>
      </div>
    </div>
    <span class="play-songs" @click="playSongs"
      ><i class="fa-regular fa-circle-play"></i> Play</span
    >
    <div class="d-flex flex-column table-responsive">
      <table class="table table-dark table-borderless">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Plays</th>
            <th scope="col"><i class="fa-solid fa-clock"></i></th>
          </tr>
        </thead>
        <tbody v-if="data.songs.length == 0">
          No music in playlist.
        </tbody>
        <tbody v-for="(song, index) in data.songs" :key="song.song_id">
          <tr>
            <th scope="row">{{ index + 1 }}</th>
            <td>
              <span>{{ song.title }} {{ song.artist.user.username }}</span>
            </td>
            <td>10000</td>
            <td>{{ song.duration }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
