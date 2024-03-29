<script>
export default {
  name: 'AlbumsCardComponent',
  props: ['albums'],
  data() {
    return {
      baseURL: 'http://127.0.0.1:8000/'
    }
  }
}
</script>

<template>
  <div class="d-flex flex-wrap">
    <router-link
      :to="`/albums/${album.album_id}`"
      v-for="album in albums"
      :key="album.album_id"
      class="music-card"
    >
      <!-- <div v-if="album.cover_image">
        <img class="img-fluid w-100" :src="album.cover_image" alt="cover image" />
      </div> -->
      <div>
        <img class="img-fluid w-100" src="../../assets/images/piano.jpg" alt="cover image" />
      </div>
      <div class="d-flex flex-column">
        <span class="song-title">{{ album.title }}</span>
        <span class="song-artist">{{ album.artist.user.username }}</span>
      </div>
    </router-link>
  </div>
</template>
