<script>
import albumsComponentVue from '../../components/dashboard/albumsComponent.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'albumsView',
  components: { albumsComponentVue },
  data() {
    return {}
  },
  methods: {
    getAlbums() {
      this.$store
        .dispatch('dashboard/getAlbums')
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    }
  },
  mounted() {
    this.getAlbums()
  },
  computed: {
    ...mapGetters({
      GET_ALBUMS: 'dashboard/GET_ALBUMS'
    })
  }
}
</script>
<template>
  <div class="Albums">
    <h3 class="text-light">Albums</h3>
    <albumsComponentVue :albums="GET_ALBUMS" />
  </div>
</template>
