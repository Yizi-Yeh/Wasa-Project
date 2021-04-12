<template>
  <div id="app">
    <Navbar />
    <router-view />
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
  computed: {
    ...mapActions(['fetchAlbumInfo'])
  },
  methods: {
    created () {
      this.fetchAlbumInfo()
    }
  }
}
</script>
