<template>
    <div class="main">
        <div class="post" v-for = "post in postsList" :key="post.id">
            <span> <b>Author:</b> {{post.author}} </span> <br>
        </div>
    </div>
</template>

<script>
export default {
  name: 'PostsCompo',
  props: {
    
  },

  computed: {
    postsList() {
      return this.$store.getters.getPostsList;
    },
  },
  mounted() {
    this.$store.dispatch('fetchPostsList');
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
.main{

}
.post{
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    background-color: #edd9db;
    color: #fff;
    border-color: transparent;
    border-radius: 15px;
}

    
</style>