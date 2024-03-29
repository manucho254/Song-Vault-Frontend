<script>
import { mapGetters } from 'vuex'
export default {
  name: 'SidebarComponent',
  data() {
    return {
      active: {
        value: '/',
        class: 'sidebar-active'
      },
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
    },
    toggleActive(value) {
      this.active.value = value
    }
  },
  mounted() {
    this.toggleActive('/')
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
      <h3>𝕊𝕠𝕟𝕘<span class="text-primary">𝕍𝕒𝕦𝕝𝕥</span></h3>
    </div>
    <div class="d-flex flex-column gap-3">
      <span class="text-grey">MENU</span>
      <div class="d-flex flex-column gap-2">
        <router-link
          :class="active.value !== '/' ? '' : active.class"
          @click="toggleActive('/')"
          to="/"
          ><span class="d-flex gap-2"><i class="bi bi-house"></i>Home</span></router-link
        >
        <router-link
          to="/explore"
          :class="active.value !== '/explore' ? '' : active.class"
          @click="toggleActive('/explore')"
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
      <router-link
        to="/playlists"
        :class="active.value !== '/playlists' ? '' : active.class"
        @click="toggleActive('/playlists')"
        ><span class="d-flex gap-2">
          <img src="../../assets/images/folder-icon.png" width="20" height="20" />Playlists</span
        ></router-link
      >
    </div>
    <div class="d-flex flex-column gap-3">
      <span class="text-grey">YOUR LIBRARY</span>
      <div class="d-flex flex-column gap-2">
        <router-link
          to="/recent"
          :class="active.value !== '/recent' ? '' : active.class"
          @click="toggleActive('/recent')"
          ><span class="d-flex gap-2"><i class="bi bi-clock-fill"></i>Recent</span></router-link
        >
        <router-link
          to="/favorites"
          :class="active.value !== '/favorites' ? '' : active.class"
          @click="toggleActive('/favorites')"
          ><span class="d-flex gap-2"
            ><i class="fa-solid fa-heart-circle-plus"></i>Favorites</span
          ></router-link
        >
        <router-link
          to="/following"
          :class="active.value !== '/following' ? '' : active.class"
          @click="toggleActive('/following')"
          ><span class="d-flex gap-2"><i class="fa-solid fa-users"></i>Following</span></router-link
        >
      </div>
    </div>
    <div class="d-flex flex-column gap-3">
      <span class="text-grey">GENERAL</span>
      <div class="d-flex flex-column gap-2">
        <router-link
          to="/account"
          :class="active.value !== '/account' ? '' : active.class"
          @click="toggleActive('/account')"
          ><span class="d-flex gap-2"><i class="bi bi-gear"></i>account</span></router-link
        >

        <a class="logout" @click="logoutUser"
          ><span class="d-flex gap-2 text-light"
            ><i class="bi bi-box-arrow-left"></i>Logout</span
          ></a
        >
      </div>
    </div>
  </div>
</template>
