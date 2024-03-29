<script>
import { mapGetters } from 'vuex'
export default {
  name: 'PlayerComponent',
  data() {
    return {
      songs: [],
      currentSong: '',
      track: {},
      playing: false,
      paused: false,
      volume: 20,
      progress: 0,
      duration: 0,
      currentTrackNumber: 0
    }
  },
  methods: {
    playSong(filePath) {
      /**
       * play a song
       */
      if (!filePath) return
      const func = this.songProgress
      if (!this.currentSong) {
        let audio = new Audio(filePath)
        audio.type = 'audio/mpeg'
        this.currentSong = audio
        this.currentSong.volume = 0.1
        this.playing = true
        this.currentSong.load()
        // get song duration
        audio.onloadedmetadata = async function () {
          func(audio.duration, audio)
        }
        this.currentSong.play()
        return
      }

      if (this.currentSong.paused) {
        this.currentSong.pause()
      }

      this.playing = true
      this.currentSong.onloadedmetadata = async function () {
        func(this.currentSong.duration, this.currentSong)
      }
      this.currentSong.play()
      return
    },
    pauseSong() {
      /** Pause song */
      this.playing = false
      this.currentSong.pause()
    },
    repeatSong() {
      /** Repeat song that is playing */
      if (!this.currentSong.loop) this.currentSong.loop = true
      else this.currentSong.loop = false
    },
    updateVolume() {
      /** Update song volume */
      if (!this.currentSong) return
      this.currentSong.volume = (this.volume / 100).toFixed(1)
      this.currentSong.play()
    },
    songProgress(duration, song) {
      /** get song progress */
      if (!this.currentSong) return
      let seconds = 0
      let el = document.querySelector('.song-progress')
      el.max = Number(duration)
      const intervalID = setInterval(updateProgress, 1000)

      function updateProgress() {
        seconds += 1
        if (seconds >= duration) {
          clearInterval(intervalID)
          return
        }
        if (song.paused) {
          return
        }
        el.value = seconds
      }
    },
    playPrevSong() {
      /**
       * Play previous song
       */
      const func = this.songProgress

      if (this.currentTrackNumber > 0) {
        this.currentTrackNumber -= 1
      } else this.currentTrackNumber = 0

      let track = this.GET_PLAYING_SONGS[this.currentTrackNumber]
      this.track = { ...track }
      if (this.currentSong) this.currentSong.pause()
      let audio = new Audio(track.file)
      audio.type = 'audio/mpeg'
      this.currentSong = audio
      this.playing = true
      this.currentSong.load()
      // get song duration
      audio.onloadedmetadata = async function () {
        func(audio.duration, audio)
      }
      this.currentSong.play()
    },
    playNextSong() {
      /**
       * Play next song
       */
      const func = this.songProgress
      if (this.currentTrackNumber >= this.GET_PLAYING_SONGS.length - 1) {
        this.currentTrackNumber = 0
      } else this.currentTrackNumber += 1

      let track = this.GET_PLAYING_SONGS[this.currentTrackNumber]
      this.track = { ...track }
      if (this.currentSong) this.currentSong.pause()
      let audio = new Audio(track.file)
      audio.type = 'audio/mpeg'
      this.currentSong = audio
      this.playing = true
      this.currentSong.load()
      // get song duration
      audio.onloadedmetadata = async function () {
        func(audio.duration, audio)
      }
      this.currentSong.play()
    }
  },
  mounted() {
    if (this.GET_PLAYING_SONGS.length > 0) {
      this.track = this.GET_PLAYING_SONGS[0]
    }
  },
  computed: {
    ...mapGetters({
      GET_PLAYING_SONGS: 'dashboard/GET_PLAYING_SONGS'
    })
  }
}
</script>

<template>
  <div class="player-card" v-if="GET_PLAYING_SONGS.length > 0">
    <div class="song-info mt-2">
      <img
        class="img-fluid"
        src="../../assets/images/player-bg.jpg"
        alt="song cover"
      />
      <div class="d-flex flex-column" v-if="this.track">
        <span class="song-title">{{ this.track.title }}</span>
        <span class="song-artist">{{ this.track.artist }}</span>
      </div>
    </div>
    <div class="d-flex flex-column justify-center align-items-center w-50">
      <div class="d-flex">
        <button class="song-shuffle btn text-light"><i class="fa-solid fa-shuffle"></i></button>
        <button class="song-prev btn text-light" @click="playPrevSong()">
          <i class="fa-solid fa-backward-step"></i>
        </button>
        <button class="song-pause btn text-light" @click="pauseSong()" v-if="playing">
          <i class="fa-regular fa-circle-pause"></i>
        </button>
        <button
          class="song-play btn text-light"
          @click="playSong(GET_PLAYING_SONGS[0].file)"
          v-else
        >
          <i class="fa-regular fa-circle-play"></i>
        </button>
        <button class="song-next btn text-light" @click="playNextSong()">
          <i class="fa-solid fa-forward-step"></i>
        </button>
        <button class="song-repeat btn text-light" v-on:click="repeatSong">
          <i class="fa-solid fa-repeat"></i>
        </button>
      </div>
      <input class="song-progress w-75" type="range" min="0" max="100" v-model="progress" />
    </div>

    <div class="d-flex w-25 gap-2">
      <span v-if="volume > 0"><i class="fas fa-volume-up"></i></span>
      <span v-else><i class="fas fa-volume-mute"></i></span>
      <input
        class="song-volume w-100"
        type="range"
        min="0"
        max="100"
        v-on:change="updateVolume"
        v-model="volume"
      />
    </div>
  </div>
</template>
