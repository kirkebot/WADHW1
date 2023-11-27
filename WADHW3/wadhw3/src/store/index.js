import { createStore } from 'vuex';

export default createStore({
  strict: true,
  state: {
    postsList: [],
    isDropdownOpen: false,
    email: '',
    password: '',
  },
  mutations: {
    setPostsList(state, posts) {
      state.postsList = posts;
    },
    toggleDropdown(state) {
      state.isDropdownOpen = !state.isDropdownOpen;
    },
    likePost(state, postId) {
      const post = state.postsList.find((p) => p.id === postId);
      if (post) {
        post.likes += 1;
      }
      fetch(`http://localhost:3000/Posts/${postId}`, {
        method: 'PATCH', // or 'PUT'
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ likes: post.likes }),
      })
    },
    resetLikes(state) {
      state.postsList.forEach((post) => {
        post.likes = 0;
      });
    },
  },
  actions: {
    async fetchPostsList({ commit }) {
      try {
        const response = await fetch('http://localhost:3000/Posts');
        const data = await response.json();
        commit('setPostsList', data);
      } catch (error) {
        console.error(error.message);
      }
    },
    toggleDropdown({ commit }) {
      commit('toggleDropdown');
    },
    likePost({ commit }, postId) {
      commit('likePost', postId);
    },
    resetLikes({ commit }) {
      commit('resetLikes');
    },
  },
  getters: {
    getPostsList: (state) => state.postsList,
  },
  modules: {},
});
