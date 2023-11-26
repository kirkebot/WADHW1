<template>
  <div class="main">
    <!-- Your existing HTML structure here -->

    <div class="content">
      <div v-for="post in postsList" :key="post.id" class="post">
        <div class="postHeader">
          <img src="@/assets/login.png" alt="Creator Image" />
          <p id="postDate">{{ post.date }}</p>
        </div>
        <div class="postContent">
          <img v-if="post.image_url" :src="post.image_url" alt="Post Image" />
          <p>{{ post.text }}</p>
        </div>
        <div class="postActions">
          <button @click="likePost(post.id)">Like</button>
          <span>{{ post.likes }} Likes</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostsCompo',
  computed: {
    postsList() {
      return this.$store.getters.getPostsList;
    },
  },
  methods: {
    likePost(postId) {
      // Dispatch an action to update the likes for the specified post
      this.$store.dispatch('likePost', postId);
    },
  },
  mounted() {
    // Fetch posts when the component is mounted
    this.$store.dispatch('fetchPostsList');
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

.post {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  background-color: #ddd;
  color: 	black;
  border-color: transparent;
  border-radius: 15px;
  margin-bottom: 20px;
}

.postHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

.postHeader img {
  max-width: 50px;
  height: 50px;
  border-radius: 50%;
}

.postContent img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 10px;
}

.postContent p {
  padding: 10px;
}

.postActions {
  display: flex;
  align-items: center;
  padding: 10px;
}

.postActions button {
  margin-right: 10px;
  cursor: pointer;
}
</style>
