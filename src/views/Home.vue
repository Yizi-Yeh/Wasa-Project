<template>
  <div class="home">
        <header id="header_index">
      <div class="container">
            <div class="music-container" :class="{'play': this.isPlaying == true}" id="music-container">
      <div class="music-info">
        <h5 id="title">{{ songs[songsIndex] }}</h5>
        <div class="progress-container" id="progress-container">
          <div class="progress" id="progress"></div>
        </div>
      </div>
      <audio   id="audio">
         <source :src='`./music/${songs}`' type='audio/ogg' />
      </audio>
      <div class="img-container">
        <img :src="`./img/${songsIndex}.jpg`" alt="music-cover" id="cover" />
      </div>

      <div class="navigation">
        <button id="prev" @click="playprev" class="action-btn">
          <i class="fas fa-backward"> </i>
        </button>
        <button id="play" @click="playsong" class="action-btn action-btn-big">
          <i v-show="!isPlaying"  class="fas fa-play"
          > </i>
        </button>
        <button id="pasuse" @click="pausesong" class="action-btn action-btn-big">
          <i v-show="isPlaying"  class="fas fa-pause"
          > </i>
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
      audio.currentTime = 0;
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
    },
    updateProgress (e){
    // 從事件物件(e)中解構出 duration及currentTime
    const {duration, currentTime} = e.srcElement
    console.log(e)
    const progressPercent = (currentTime / duration) *100
    progress.style.width = `${progressPercent}%`
    },
    setProgress(e){
    const width =  this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration
    audio.currentTime = (clickX/width)*duration
}
  }
}
</script>
