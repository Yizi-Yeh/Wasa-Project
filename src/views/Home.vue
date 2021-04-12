<template>
  <div class="home">
    <header id="header_index">
      <div class="container">
        <div
          id="music-container"
          class="music-container"
          :class="{'play': this.isPlaying == true}"
        >
          <div class="music-info">
            <h5 id="title">
              {{ songs[songsIndex] }}
            </h5>
            <div
              id="progress-container"
              class="progress-container"
            >
              <div
                id="progress"
                class="progress"
              />
            </div>
          </div>
          <audio id="audio">
            <source
              :src="`./music/${songs}`"
              type="audio/ogg"
            >
          </audio>
          <div class="img-container">
            <img
              id="cover"
              :src="`./img/${songsIndex}.jpg`"
              alt="music-cover"
            >
          </div>

          <div class="navigation">
            <button
              id="prev"
              class="action-btn"
              @click="playprev"
            >
              <i class="fas fa-backward" />
            </button>
            <button
              id="play"
              class="action-btn action-btn-big"
              @click="playsong"
            >
              <i
                v-show="!isPlaying"
                class="fas fa-play"
              />
            </button>
            <button
              id="pasuse"
              class="action-btn action-btn-big"
              @click="pausesong"
            >
              <i
                v-show="isPlaying"
                class="fas fa-pause"
              />
            </button>
            <button
              id="next"
              class="action-btn"
              @click="playnext"
            >
              <i class="fas fa-forward" />
            </button>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      songs: ['靴の花火', 'Tokyo', 'エイプリル'],
      songsIndex: 0,
      isPlaying: false
    }
  },
  computed: {
  },
  methods: {
    playsong () {
      this.isPlaying = true
      const song = this.songs[this.songsIndex]
      const audio = new Audio()
      audio.src = `./music/${song}.mp3`
      audio.play()
    },
    pausesong () {
      this.isPlaying = false
      const audio = new Audio()
      audio.pause()
      audio.currentTime = 0
    },
    playnext () {
      this.songsIndex++
      if (this.songsIndex > this.songs.length - 1) {
        this.songsIndex = 0
      }
    },
    playprev () {
      this.songsIndex--
      if (this.songsIndex < 0) {
        this.songsIndex = this.songs.length - 1
      }
    }
  }
}
</script>
