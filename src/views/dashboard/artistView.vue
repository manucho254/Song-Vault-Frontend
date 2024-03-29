<script>
import albumsComponentVue from '../../components/dashboard/albumsComponent.vue'
import songsComponentVue from '../../components/dashboard/songsComponent.vue'

import { mapGetters } from 'vuex'

export default {
  name: 'artistView',
  components: { albumsComponentVue, songsComponentVue },
  data() {
    return {
      data: {},
      baseURL: 'http://127.0.0.1:8000/'
    }
  },
  methods: {
    getArtist() {
      this.$store
        .dispatch('dashboard/getArtist', this.$route.params)
        .then((res) => {
          this.data = res.data
        })
        .catch((err) => console.log(err))
    }
  },
  mounted() {
    this.getArtist()
  },
  computed: {
    ...mapGetters({
      GET_ARTIST: 'dashboard/GET_ARTIST'
    })
  }
}
</script>
<template>
  <div class="Album d-flex flex-column gap-3 p-2">
    <div class="d-flex gap-3 single-header">
      <div v-if="GET_ARTIST.user.user_media.length > 0">
        <img
          class="img-fluid w-100"
          :src="`${baseURL}${GET_ARTIST.user.user_media}`"
          alt="cover image"
        />
      </div>
      <div v-else>
        <img
          class="img-fluid w-100"
          src="../../assets/images/blank-profile.png"
          alt="cover image"
        />
      </div>
      <div class="d-flex flex-column">
        <span class="song-artist">{{ GET_ARTIST.user.username }}</span>
        <span class="song-artist">31,000,000 listeners monthly</span>
      </div>
    </div>
    <div class="d-flex flex-column table-responsive">
      <div class="Albums">
        <h3 class="text-light">Albums</h3>
        <albumsComponentVue :albums="GET_ARTIST.albums" />
      </div>
      <div class="Songs">
        <h3 class="text-light">Singles</h3>
        <songsComponentVue :songs="GET_ARTIST.songs" />
      </div>
    </div>
  </div>
</template>
