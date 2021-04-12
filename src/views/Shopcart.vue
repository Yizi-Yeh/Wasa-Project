<template>
  <section
    id="section-cart"
    class="section-cart"
  >
    <div class="container cart-container ">
      <div class="input-group">
        <ul class="cart-lists">
          <li
            v-for="item in carts"
            :key="item"
            class="cart-lists-info"
          >
            <div class="cart-lists-info-img">
              <i class="fas fa-landmark" />
              <img
                :src="item.images"
                width="250px"
                alt=""
              >
            </div>
            <br>
            <div class="cart-lists-info-content">
              <div class="cart-lists-info-title">
                <h5> {{ item.title }}</h5>
              </div>
              <br>
              <div class="cart-lists-info-intro">
                <i class="fas fa-compact-disc" />
                <span> 紹介： <br> {{ item.description }}</span>
              </div>
              <br>
              <div class="cart-lists-info-release">
                <i class="far fa-calendar-alt" />
                リリース：
                <br> {{ item.release }}
              </div>
              <br>
              <div class="cart-lists-info-price">
                值段（税込）：<br> {{ item.price | commaFormat | dollarSign }}
              </div>
              <br>
              <div>
                <button
                  type="button"
                  class="cart-lists-info-btn btn btn-outline-dark w-25"
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
  name: 'Cart',
  data () {
    return {
    }
  },
  computed: {
    carts () {
      return this.$store.getters.carts
    }
  },
  methods: {
    del (index) {
      this.$store.commit('delCart', index)
    }
  }
}
</script>
