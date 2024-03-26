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
  }
}
</script>

<template>
  <div class="d-flex">
    <SidebarComponent />
    <main class="main-section">
      <div class="d-flex justify-content-between gap-4">
        <input
          class="search-bar"
          placeholder="Search by artist, songs or albums"
          type="text"
          name="search"
          v-model="search"
        />
        <div class="d-flex gap-3">
          <span class="notifications h3 text-white"><i class="fa-regular fa-bell"></i></span>
          <span class="profile h3 text-white" v-if="!image"
            ><i class="fa-solid fa-circle"></i
          ></span>
          <img v-else :src="image" alt="profile image" />
        </div>
      </div>
      <CatalogComponent />
      <PlayerComponent />
    </main>
  </div>
</template>
