<script>
import { mapGetters } from 'vuex'

export default {
  name: 'RecentView',
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
      GET_RECENT: 'dashboard/GET_RECENT'
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
      <h4>RECENT ACTIVITY</h4>
    </div>
    <div class="mt-3" v-if="GET_RECENT.length === 0">
      <p>No recent activity found.</p>
    </div>
  </div>
</template>
