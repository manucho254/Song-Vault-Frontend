<script>
import albumsComponentVue from '../../components/dashboard/albumsComponent.vue'
import artistsComponentVue from '../../components/dashboard/artistsComponent.vue'
import songsComponentVue from '../../components/dashboard/songsComponent.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'exploreView',
  components: { albumsComponentVue, artistsComponentVue, songsComponentVue },
  data() {
    return {
      query: ''
    }
  },
  methods: {
    search() {
      this.$store
        .dispatch('dashboard/searchCatalog', this.query)
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    }
  },
  mounted() {
    this.search()
  },
  computed: {
    ...mapGetters({
      GET_SEARCHED: 'dashboard/GET_SEARCHED'
    })
  }
}
</script>
<template>
  <div>
    <input
      @keyup="search"
      class="search-bar"
      placeholder="Search by artist, songs or albums"
      type="text"
      name="search"
      v-model="query"
    />
  </div>
  <div class="albums" v-if="GET_SEARCHED.albums.length > 0">
    <h3 class="text-light">Albums</h3>
    <albumsComponentVue :albums="GET_SEARCHED.albums" />
  </div>
  <div class="songs" v-if="GET_SEARCHED.songs.length > 0">
    <h3 class="text-light">Singles</h3>
    <songsComponentVue :songs="GET_SEARCHED.songs" />
  </div>
  <div class="artists" v-if="GET_SEARCHED.artists.length > 0">
    <h3 class="text-light">Artists</h3>
    <artistsComponentVue :artists="GET_SEARCHED.artists" />
  </div>
  <div v-else>
    <h4 class="d-flex gap-2">
      No results found for
      <p class="fw-bold">{{ query }}</p>
    </h4>
  </div>
</template>
