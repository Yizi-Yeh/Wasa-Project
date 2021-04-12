import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 使用者所選 Album類別，預設為ALL
    currCategory: 'ALL',
    // 存放API回傳的album
    album: []
  },
  getters: {
    // 類別清單
    categoryList (state) {
      return state.album.map(item => item.category)
    },
    // 使用者選擇類別 === 預設類別
    currAlbum (state) {
      const { album } = state
      return album.filter((item) =>
        item.category === state.currCategory
      )
    }
  },
  mutations: {
    setcurrCategory (state, payload) {
      state.currCategory = payload
    },
    setAlbumInfo (state, payload) {
      state.album = payload
    }
  },
  actions: {
    fetchAlbumInfo () {
      const api = 'https://api.mocki.io/v1/33538511'
      Axios.get(api).then((response) => {
        if (response) {
          this.$store.commit('setAlbumInfo', response.data)
          console.log(response.data)
        }
      })
    }
  },
  modules: {
  },
  plugins: [createPersistedState()]
})
