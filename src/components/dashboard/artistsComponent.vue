<script>
export default {
  name: 'AlbumsCardComponent',
  props: ['artists'],
  data() {
    return {
      baseURL: 'http://127.0.0.1:8000/'
    }
  }
}
</script>

<template>
  <div class="d-flex flex-wrap gap-3">
    <router-link
      :to="`/artists/${artist.artist_id}`"
      v-for="artist in artists"
      :key="artist.artist_id"
      class="music-card"
    >
      <div v-if="artist.user.user_media.length > 0">
        <img
          class="img-fluid w-100"
          :src="artist.user.user_media[0].image"
          alt="cover image"
        />
      </div>
      <div v-else>
        <img
          class="img-fluid w-100"
          src="../../assets/images/blank-profile.png"
          alt="cover image"
        />
      </div>
      <div class="d-flex flex-column">
        <span class="song-title">{{ artist.user.username }}</span>
        <span class="song-artist">{{}}</span>
      </div>
    </router-link>
  </div>
</template>
