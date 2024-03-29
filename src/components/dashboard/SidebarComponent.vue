<script>
import { mapGetters } from 'vuex'
export default {
  name: 'SidebarComponent',
  data() {
    return {
      path: ''
    }
  },
  methods: {
    logoutUser() {
      this.$store.dispatch('auth/logout')
      this.$toast.open({
        message: 'Logged out successfully.',
        type: 'success',
        duration: 3000,
        position: 'top-right'
      })
      this.$router.push({ name: 'login' })
    },
    getPath() {
      return this.$route.path
    },
    createPlaylist() {
      this.$store
        .dispatch('dashboard/createPlaylist')
        .then((res) => {
          this.$toast.open({
            message: 'Playlist Created successfully.',
            type: 'success',
            duration: 3000,
            position: 'top-right'
          })
          this.$router.push(`/playlists/${res.data.playlist_id}`)
          console.log(res)
        })
        .catch((err) => console.log(err))
    }
  },
  mounted() {
    this.path = this.getPath()
  },
  computed: {
    ...mapGetters({
      GET_PLAYLISTS: 'dashboard/GET_PLAYLISTS'
    })
  }
}
</script>

<template>
  <div class="sidebar">
    <div class="sidebar-header">
      <h2>Song Vault</h2>
    </div>
    <div class="d-flex flex-column gap-3">
      <span class="text-grey">MENU</span>
      <div class="d-flex flex-column gap-2">
        <router-link to="/"
          ><span class="d-flex gap-2"><i class="bi bi-house"></i>Home</span></router-link
        >
        <router-link to="/explore"
          ><span class="d-flex gap-2"
            ><i class="bi bi-arrow-right-circle"></i>Explore</span
          ></router-link
        >
      </div>
    </div>
    <div class="d-flex flex-column gap-3">
      <span class="text-grey">SAVED PLAYLISTS</span>
      <a role="button" @click="createPlaylist"
        ><i class="fa-solid fa-plus-square"></i> Create playlist</a
      >
      <router-link to="/playlists"
        ><span class="d-flex gap-2">
          <img src="../../assets/images/folder-icon.png" width="20" height="20" />Playlists</span
        ></router-link
      >
    </div>
    <div class="d-flex flex-column gap-3">
      <span class="text-grey">YOUR LIBRARY</span>
      <div class="d-flex flex-column gap-2">
        <router-link to="/recent"
          ><span class="d-flex gap-2"><i class="bi bi-clock-fill"></i>Recent</span></router-link
        >
        <router-link to="/favorites"
          ><span class="d-flex gap-2"
            ><i class="fa-solid fa-heart-circle-plus"></i>Favorites</span
          ></router-link
        >
        <router-link to="/following"
          ><span class="d-flex gap-2"><i class="fa-solid fa-users"></i>Following</span></router-link
        >
      </div>
    </div>
    <div class="d-flex flex-column gap-3">
      <span class="text-grey">GENERAL</span>
      <div class="d-flex flex-column gap-2">
        <router-link to="/account"
          ><span class="d-flex gap-2"><i class="bi bi-gear"></i>account</span></router-link
        >

        <a class="logout" v-on:click="logoutUser"
          ><span class="d-flex gap-2 text-light"
            ><i class="bi bi-box-arrow-left"></i>Logout</span
          ></a
        >
      </div>
    </div>
  </div>
</template>
