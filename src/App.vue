<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>
<script>
import Navbar from './components/Navbar'
import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    Navbar
  },
  methods: {
    ...mapActions(['fetchAlbumInfo']),
    mounted () {
      this.fetchAlbumInfo()
    }
  }
}
</script>
