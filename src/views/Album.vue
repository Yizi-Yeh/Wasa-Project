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
                価格（税込）：<br> {{ item.price | commaFormat | dollarSign }}
              </div>
              <br>
              <div>
                <button
                  type="button"
                  class="album-lists-info-btn btn btn-outline-dark w-25"
                  @click="addCart(item)"
                >
                  放入購物車
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import Vue from 'vue'
import { mapState, mapGetters } from 'vuex'
Vue.filter('dollarSign', function (n) {
  return `¥ ${n}`
})
Vue.filter('commaFormat', (value) => {
  if (!value) return ''
  return value.toString().replace(/^(-?\d+?)((?:\d{3})+)(?=\.\d+$|$)/, function (all, pre, digital) {
    return pre + digital.replace(/\d{3}/g, ',$&')
  })
})
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
    addCart (item) {
      if (item) {
        this.$swal({
          icon: 'success',
          title: '已放入購物車'
        })
        this.$store.commit('addCart', item)
        console.log(item)
      }
    }
  }
}
</script>
