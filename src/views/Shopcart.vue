<template>
  <section
    id="section-cart"
    class="section-cart"
  >
    <div class="container cart-container">
      <div class="row">
        <div class="cart-lists col-sm-7 col-md-8">
          <div
            v-for="item in carts"
            :key="item"
            class="cart-lists-info w-100"
          >
            <div class="panel-heading">
              <div class="panel-title" />
            </div>
            <div class="panel-body">
              <div class="cart-container">
                <div class="cart-heading" />
                <div class="cart-body">
                  <div class="cart-item">
                    <div class="img mb-3">
                      <img
                        :src="item.images"
                        height="150px"
                      >
                    </div>
                    <div class="detail">
                      {{ item.title }}
                    </div>
                    <div class="price">
                      価格（税込）{{ item.price | commaFormat | dollarSign }}
                    </div>
                    <div class="btn">
                      <button
                        type="button"
                        class="album-lists-info-btn btn btn-outline-dark "
                        @click="delCart(item)"
                      >
                        刪除
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="price-lists col-sm-4 col-md-4 h-50 w-100"
        >
          <div
            class="
          panel
          w-100"
          >
            <div class="panel-body">
              <div class="summary">
                <div class="total">
                  <span>合計：</span>
                  <span>円</span>
                </div>
              </div>
            </div>
            <div class="panel-footer">
              <div class="text-center">
                <div class="btn">
                  <button
                    type="button"
                    class="album-lists-info-btn btn btn-outline-dark"
                  >
                    結帳
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
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
    ...mapGetters(['carts'])
  },
  methods: {
    delCart (index) {
      this.$store.commit('delCart', index)
    }
  }
}
</script>
