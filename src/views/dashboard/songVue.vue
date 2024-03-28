<script>
import { mapGetters } from 'vuex'

export default {
  name: 'playlistView',
  data() {
    return {
      song: '',
      baseURL: 'http://127.0.0.1:8000/'
    }
  },
  methods: {
    getSong() {
      this.$store
        .dispatch('dashboard/getSong', this.$route.params)
        .then((res) => {
          this.song = res.data
        })
        .catch((err) => console.log(err))
    },
    playSongs() {
      let data = {
        title: this.song.name,
        artist: this.song.artist.user.username,
        image: this.song.song_media[0].image,
        file: `${this.baseURL}${this.song.song_media[0].file}`
      }
      this.$store.commit('dashboard/UPDATE_PLAYING_SONGS', [data])
    }
  },
  mounted() {
    this.getSong()
    console.log(this.GET_SONG)
  },
  computed: {
    ...mapGetters({
      GET_SONG: 'dashboard/GET_SONG'
    })
  }
}
</script>
<template>
  <div class="song d-flex flex-column gap-3">
    <div class="d-flex gap-3">
      <div>
        <img
          class="img-fluid w-100"
          src="../../assets/images/blank-profile.png"
          alt="cover image"
        />
      </div>
      <div class="d-flex flex-column">
        <span class="song-title">{{ GET_SONG.name }}</span>
        <span class="song-artist">{{ GET_SONG.artist.user.username }}</span>
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
        <tbody>
          <tr>
            <th scope="row">{{ 1 }}</th>
            <td>
              <span>{{ GET_SONG.name }} {{ GET_SONG.artist.user.username }}</span>
            </td>
            <td>10000</td>
            <td>{{ song.duration }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
