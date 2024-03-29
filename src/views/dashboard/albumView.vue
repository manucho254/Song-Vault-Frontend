<script>
import { mapGetters } from 'vuex'

export default {
  name: 'albumView',
  data() {
    return {
      data: '',
      baseURL: 'http://127.0.0.1:8000/'
    }
  },
  methods: {
    getAlbum() {
      this.$store
        .dispatch('dashboard/getAlbum', this.$route.params)
        .then((res) => {
          this.data = res.data
        })
        .catch((err) => console.log(err))
    },
    playSongs() {
      let songs = []

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
      this.$store.commit('dashboard/UPDATE_PLAYING_SONGS', songs)
      this.$router.go()
    }
  },
  mounted() {
    this.getAlbum()
  },
  computed: {
    ...mapGetters({
      GET_ALBUM: 'dashboard/GET_ALBUM'
    })
  }
}
</script>
<template>
  <div class="Album d-flex flex-column gap-3 p-2">
    <div class="d-flex gap-3 single-header">
      <!-- <div v-if="GET_ALBUM.cover_image">
        <img
          class="img-fluid w-100"
          :src="`${baseURL}${GET_ALBUM.cover_image}`"
          alt="cover image"
        />
      </div> -->
      <div>
        <img
          class="img-fluid w-100"
          src="../../assets/images/piano.jpg"
          alt="cover image"
        />
      </div>
      <div class="d-flex flex-column">
        <span class="song-title"><span class="fw-bold">Album:</span> {{ GET_ALBUM.title }}</span>
        <span class="song-artist">{{ GET_ALBUM['artist'].user.username }}</span>
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
        <tbody v-for="(song, index) in data.songs" :key="song.song_id">
          <tr>
            <th scope="row">{{ index + 1 }}</th>
            <td>
              <span class="d-flex flex-column"
                ><span>{{ song.title }}</span> <span>{{ song.artist.user.username }}</span></span
              >
            </td>
            <td>10000</td>
            <td>{{ song.duration }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
