<template>
  <div class="main-view">
    <div class="side-panel left"></div>

    <div class="center-content">
      <div class="header"></div>
      <div class="posts">
        <posts-compo></posts-compo>
      </div>
      
    </div>

    <div class="side-panel right"></div>
    
  </div>
  <div class="footerb">
        <button @click="resetLikes">Reset Likes</button>
    </div>
</template>

<script>
import PostsCompo from "@/components/PostsCompo.vue";
export default {
  name: "MainView",
  components: { PostsCompo },
   methods: {
    resetLikes() {
      // Dispatch an action to reset the likes for all posts
      this.$store.dispatch('resetLikes');
    },
  },
  data() {
    return {};
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin-top: 3px;
  padding: 0;
}

.main-view {
  display: flex;
  height: 100%;
}

.side-panel {
  flex: 1;
  margin-top: 5px;
  border-radius: 10px;
  background-color: #ddd;
  /*height: 100%; */
}

.side-panel.left {
  /* Additional styles for left panel if needed */
}

.side-panel.right {
  /* Additional styles for right panel if needed */
}

.p{

}
.center-content {
  flex: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footerb {
  position: relative;
  color: black;
  margin-top: 5px;
  width: 100%;
  background: white;

  
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
}
.footer button{
    margin-top: 10px;
    cursor: pointer;
}
.posts {
  width: 95%; /* Adjust width as needed */

  max-width: 800px; /* Set a maximum width if desired */
}
</style>
