<template>
  <section id="section-album"
  class="section-album">
    <div class="input-group">
      <select v-model="currCategory">
        <option selected>ALL</option>
        <option
        v-for="C in categoryList"
        :key="C">{{ C }}</option>
  </select>
      <ul class="Album-lists">
      <li class="Album-info wraps"
        v-for="item in currAlbum" :key="item">

        <div class="album-info">
          <i class="fas fa-landmark"></i>
          <span>ALBUM TITLE: {{ item.title }}</span>
        </div>

        <div class="album-info">
         <i class="fas fa-map-marked-alt"></i>
          <span>ALBUM DESCRIPTION: {{ item.description }}</span>
        </div>

        <div class="album-info">
          <i class="far fa-calendar-alt"></i>
          公告日期: {{ item.release }}
        </div>

      </li>
    </ul>
</div>
  </section>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'Album',
  data () {
    return {
    }
  },
  computed: {
    currCategory: {
      get () {
        return this.$store.state.currCategory
      },
      set (value) {
        this.$store.commit('setcurrCategory', value)
      }
    },
    ...mapState(['album']),
    ...mapGetters(['categoryList', 'currAlbum'])
  },
  methods: {

  }
}
</script>
