<script>
import SidebarComponent from '../components/dashboard/SidebarComponent.vue'
import PlayerComponent from '../components/dashboard/PlayerComponent.vue'
import CatalogComponent from '../components/dashboard/CatalogComponent.vue'
export default {
  components: {
    SidebarComponent,
    PlayerComponent,
    CatalogComponent
  },
  data() {
    return {
      search: '',
      image: ''
    }
  },
  methods: {
    getPathName() {
      return this.$route.path
    }
  }
}
</script>

<template>
  <div class="d-flex">
    <SidebarComponent />
    <main class="main-section">
      <div class="d-flex justify-content-end gap-4">
        <img
          v-if="getPathName() === '/'"
          class="home-image img-fluid"
          src="../assets/images/concert-image.jpg"
        />
        <div class="d-flex gap-3">
          <span class="notifications h3 text-white"><i class="fa-regular fa-bell"></i></span>
          <router-link to="/account">
            <span class="profile h3 text-white" v-if="!image"
              ><i class="fa-solid fa-circle"></i
            ></span>
            <img v-else :src="image" alt="profile image"
          /></router-link>
        </div>
      </div>
      <CatalogComponent v-if="getPathName() === '/'" />
      <PlayerComponent />
      <router-view />
    </main>
  </div>
</template>
