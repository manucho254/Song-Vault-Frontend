<script>
import albumsComponentVue from './albumsComponent.vue'
import artistsComponentVue from './artistsComponent.vue'
import songsComponentVue from './songsComponent.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'AllMediaCatalogComponent',
  components: { albumsComponentVue, artistsComponentVue, songsComponentVue },
  // props: ['songs', 'albums', 'artists']  'Use props later' ,
  data() {
    return {}
  },
  methods: {
    getSongs() {
      this.$store
        .dispatch('dashboard/getSongs')
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    },
    getArtists() {
      this.$store
        .dispatch('dashboard/getArtists')
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    },
    getAlbums() {
      this.$store
        .dispatch('dashboard/getAlbums')
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    }
  },
  mounted() {
    this.getSongs()
    this.getArtists()
    this.getAlbums()
  },
  computed: {
    ...mapGetters({
      GET_SONGS: 'dashboard/GET_SONGS',
      GET_ALBUMS: 'dashboard/GET_ALBUMS',
      GET_ARTISTS: 'dashboard/GET_ARTISTS'
    })
  }
}
</script>
<template>
  <div class="albums">
    <h3 class="text-light">Albums</h3>
    <albumsComponentVue :albums="GET_ALBUMS.results" />
  </div>
  <div class="songs">
    <h3 class="text-light">Singles</h3>
    <songsComponentVue :songs="GET_SONGS.results" />
  </div>
  <div class="artists">
    <h3 class="text-light">Artists</h3>
    <artistsComponentVue :artists="GET_ARTISTS.results" />
  </div>
</template>
