import { createStore } from 'vuex'

export default createStore({
  strict: true,
  state: {
    postsList: [],
    isDropdownOpen: false,
  },
  mutations: {
    setPostsList(state, posts) {
      state.postsList = posts;
    },
    toggleDropdown(state){
      state.isDropdownOpen = !state.isDropdownOpen;
    }
  },
  actions: {
    async fetchPostsList({ commit }) {
        await fetch('http://localhost:3000/Posts')
        .then(response => response.json())
        .then(data => commit('setPostsList', data))
        .catch(err => console.error(err.message))
    },

    toggleDropdown: act => {
      act.commit("toggleDropdown")
    }
  },

  getters: {
    getPostsList: (state) => state.postsList,
  },

  modules: {
  }
})
