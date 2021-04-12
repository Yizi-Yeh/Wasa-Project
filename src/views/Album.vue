<template>
  <section
    id="section-album"
    class="section-album"
  >
    <div class="container album-container ">
      <div class="input-group">
        <select
          v-model="currCategory"
          class="album-select"
        >
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

        <ul class="album-lists">
          <li
            v-for="item in currAlbum"
            :key="item"
            class="album-lists-info"
          >
            <div class="album-lists-info-img">
              <i class="fas fa-landmark" />
              <img
                :src="item.images"
                width="250px"
                alt=""
              >
            </div>
            <br>
            <div class="album-lists-info-content">
              <div class="album-lists-info-title">
                <h5> {{ item.title }}</h5>
              </div>
              <br>
              <div class="album-lists-info-intro">
                <i class="fas fa-compact-disc" />
                <span> 紹介： <br> {{ item.description }}</span>
              </div>
              <br>
              <div class="album-lists-info-release">
                <i class="far fa-calendar-alt" />
                リリース：
                <br> {{ item.release }}
              </div>
              <br>
              <div class="album-lists-info-price">
                <i class="fas fa-dollar-sign" />
                值段：<br> {{ item.price }}
              </div>
            </div>
          </li>
        </ul>
      </div>
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
