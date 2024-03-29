<script>
export default {
  name: 'AlbumsCardComponent',
  props: ['playlists']
}
</script>

<template>
  <div class="d-flex flex-wrap">
    <router-link
      :to="`/playlists/${playlist.playlist_id}`"
      v-for="playlist in playlists"
      :key="playlist.playlist_id"
      class="music-card"
    >
      <img
        class="img-fluid w-100 h-75"
        src="../../assets/images/playlist-bg.jpg"
        alt="playlist image"
      />
      <div class="d-flex flex-column">
        <span class="song-title">{{ playlist.name }}</span>
      </div>
    </router-link>
  </div>
</template>
