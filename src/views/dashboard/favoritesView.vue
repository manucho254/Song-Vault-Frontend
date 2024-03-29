<script>
import { mapGetters } from 'vuex'

export default {
  name: 'FavoritesView',
  data() {
    return {
      data: {},
      baseURL: 'http://127.0.0.1:8000/'
    }
  },
  methods: {},
  mounted() {},
  computed: {
    ...mapGetters({
      GET_FAVORITES: 'dashboard/GET_FAVORITES'
    })
  }
}
</script>
<template>
  <div>
    <div class="d-flex gap-3 single-header">
      <div>
        <img class="img-fluid w-100" src="../../assets/images/piano.jpg" alt="cover image" />
      </div>
      <h4>FAVORITES: {{  GET_FAVORITES.length }}</h4>
    </div>
    <div class="mt-3" v-if="GET_FAVORITES.length === 0">
      <p>You don't have any favorites tracks.</p>
    </div>
  </div>
</template>
