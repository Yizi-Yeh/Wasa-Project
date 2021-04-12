<template>
  <section
    id="section-album"
    class="section-album"
  >
    <div class="input-group">
      <select v-model="currCategory">
        <option selected>
          ALL
        </option>
        <option
          v-for="(category,idx) in categoryList"
          :key="idx"
        >
          {{ category }}
        </option>
      </select>
      <ul class="Album-lists">
        <li
          v-for="item in currAlbum"
          :key="item"
          class="Album-info wraps"
        >
          <div class="album-info">
            <i class="fas fa-landmark" />
            <img
              :src="item.images"
              width="250px"
              alt=""
            >
          </div>

          <div class="album-info">
            <i class="fas fa-landmark" />
            <span>ALBUM TITLE: {{ item.title }}</span>
          </div>

          <div class="album-info">
            <i class="fas fa-map-marked-alt" />
            <span>ALBUM DESCRIPTION: {{ item.description }}</span>
          </div>

          <div class="album-info">
            <i class="far fa-calendar-alt" />
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
