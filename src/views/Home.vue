<template>
  <div class="home">
        <header id="header_index">
      <div class="container">
            <div class="music-container" id="music-container">
      <div class="music-info">
        <h4 id="title">mol74 エイプリル</h4>
        <div class="progress-container" id="progress-container">
          <div class="progress" id="progress"></div>
        </div>
      </div>
      <audio   id="audio">
         <source :src="`./music/${songs}`" type="audio/ogg" />
      </audio>
      <div class="img-container">
        <img :src="`./img/${songsIndex}.jpg`" alt="music-cover" id="cover" />
      </div>

      <div class="navigation">
        <button id="prev" @click="playprev" class="action-btn">
          <i class="fas fa-backward"> </i>
        </button>
        <button id="play" @click="playsong" class="action-btn action-btn-big">
          <i class="fas fa-play"> </i>
        </button>
        <button id="next" @click="playnext" class="action-btn">
          <i class="fas fa-forward"> </i>
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
      songsIndex: 0
    }
  },
  computed: {
  },
  methods: {
    playsong () {
      const song = this.songs[this.songsIndex]
      const audio = new Audio()
      audio.src = `./music/${song}.mp3`
      audio.play()
    },
    pauseSong () {
      const audio = new Audio()
      audio.pause()
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
