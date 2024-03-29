<script>
import playListComponentVue from '../../components/dashboard/playListComponent.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'playlistsView',
  components: { playListComponentVue },
  data() {
    return {}
  },
  methods: {
    getPlaylists() {
      this.$store
        .dispatch('dashboard/getPlaylists')
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    }
  },
  mounted() {
    this.getPlaylists()
  },
  computed: {
    ...mapGetters({
      GET_PLAYLISTS: 'dashboard/GET_PLAYLISTS'
    })
  }
}
</script>
<template>
  <div class="Playlists">
    <h3 class="text-light">PLAYLISTS</h3>
    <playListComponentVue :playlists="GET_PLAYLISTS.results" />
  </div>
</template>
