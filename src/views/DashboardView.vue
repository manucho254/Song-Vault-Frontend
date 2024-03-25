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
      search: ''
    }
  }
}
</script>

<template>
  <div class="d-flex">
    <SidebarComponent />
    <main class="main-section">
      <input
        class="search-bar"
        placeholder="Search by artist, songs or albums"
        type="text"
        name="search"
        v-model="search"
      />
      <CatalogComponent/>
      <PlayerComponent />
    </main>
  </div>
</template>
