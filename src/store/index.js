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
      const { album } = state
      const category = []
      for (const c of album) {
        category.push(c.category)
      }
      const nonrepeat = [...(new Set(category))]
      return nonrepeat
    },
    // 使用者選擇類別 === 預設類別
    currAlbum (state) {
      const { album } = state
      if (state.currCategory !== 'ALL') {
        return album.filter((item) =>
          item.category === state.currCategory
        )
      } else {
        return album
      }
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
    fetchAlbumInfo ({ commit }) {
      const api = 'https://api.mocki.io/v1/146851dd'
      Axios.get(api).then((response) => {
        if (response) {
          commit('setAlbumInfo', response.data)
          console.log(response.data)
        }
      })
    }
  },
  modules: {
  },
  plugins: [createPersistedState()]
})
