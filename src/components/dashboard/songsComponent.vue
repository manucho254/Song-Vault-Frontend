<script>
export default {
  name: 'songsCardComponent',
  props: ['songs']
}
</script>

<template>
  <div class="d-flex gap-3">
    <router-link
      :to="`/songs/${song.song_id}`"
      v-for="song in songs.results"
      :key="song.song_id"
      class="music-card"
    >
      <div v-if="song.song_media.length > 0">
        <img class="img-fluid w-100" :src="song.song_media[0].image" alt="cover image" />
      </div>
      <div v-else>
        <img
          class="img-fluid w-100"
          src="../../assets/images/blank-profile.png"
          alt="cover image"
        />
      </div>

      <div class="d-flex flex-column">
        <span class="song-title">{{ song.name }}</span>
        <span class="song-artist">{{ song.artist.user.username }}</span>
      </div>
    </router-link>
  </div>
</template>
