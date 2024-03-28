<script>
export default {
  name: 'AlbumsCardComponent',
  props: ['albums']
}
</script>

<template>
  <div class="d-flex flex-wrap">
    <router-link
      :to="`/albums/${album.album_id}`"
      v-for="album in albums.results"
      :key="album.album_id"
      class="music-card"
    >
      <div v-if="album.cover_image">
        <img class="img-fluid w-100" :src="album.cover_image" alt="cover image" />
      </div>
      <div v-else>
        <img
          class="img-fluid w-100"
          src="../../assets/images/blank-profile.png"
          alt="cover image"
        />
      </div>
      <div class="d-flex flex-column">
        <span class="song-title">{{ album.title }}</span>
        <span class="song-artist">{{ album.artist.user.username }}</span>
      </div>
    </router-link>
  </div>
</template>
