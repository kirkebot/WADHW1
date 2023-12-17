

<template>
  
    <div class="main-content">
      <div class="side-panel left"></div>
      <div class="posts-container">
        <div class="container">
          <button v-if="authResult" @click="Logout" class="center">Logout</button>
        </div>
        <div class="post-list" v-for="post in posts" :key="post.index">
          <div class="post" @click="aPost(post.id)">
            <div class="postHeader">
              <p id="postDate">{{ getCurrentDate() }}</p>
            </div>
            <p>{{ post.body }} </p>
          </div>
        </div>
        <div class="button-container">
          <button @click="DeleteAll" class="delete-button">Delete All</button>
          <button @click="AddPost" class="add-button">Add Post</button>
        </div>
      </div>
      <div class="side-panel right"></div>
    </div>
    <div class="footer"></div>
  
</template>

<script>
import auth from "../auth";

export default {
  name: "HomeView",
  data: function () {
    return {
      posts: [],
      authResult: auth.authenticated(),
    };
  },
  methods: {
    AddPost() {
      this.$router.push("/api/addpost");
    },

    DeleteAll() {
      console.log("delete all");
      for (const post of this.posts) {
        console.log(post);
        fetch(`http://localhost:3000/api/posts/${post.id}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        })
          .then((response) => {
            console.log(response.data);
          })
          .catch((e) => {
            console.log(e);
          });
      }
      this.posts = [];
    },

    Logout() {
      fetch("http://localhost:3000/auth/logout", {
        credentials: "include",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          console.log("jwt removed");
          this.$router.push("/api/login");
        })
        .catch((e) => {
          console.log(e);
          console.log("error logout");
        });
    },

    getCurrentDate() {
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = this.getMonthName(currentDate.getMonth() + 1);
      const day = currentDate.getDate();
      return `${month} ${day}, ${year}`;
    },

    getMonthName(monthNumber) {
      const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
      ];
      return months[monthNumber - 1];
    },

    aPost(id) {
      console.log("/api/apost/" + id);
      this.$router.push("/api/apost/" + id);
    },
  },
  mounted() {
    fetch(`http://localhost:3000/api/posts/`)
      .then((response) => response.json())
      .then((data) => (this.posts = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style scoped>
body {
  margin: 20px 40px;
  font-size: 1.2rem;
  letter-spacing: 1px;
  background: #fafafa;
  position: relative;
}


.main-view{
  display: flexbox;
}
.main-content {
  display: flex;
  align-items: stretch;
  width: 100%;
  height: 100%;
}

.footer {
  height: 50px; /* Set a fixed height for the footer */
  background-color: #ddd; /* Add a background color for visibility */
  color: #fff;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.post-list{
  background: rgb(223, 233, 228);
  margin-bottom: 5px;
  padding: 3px 5px;
  border-radius: 10px;
  width: 100%;
}
h3{
  font-family: 'Quicksand', sans-serif;
  color: #444;
  background: rgb(172, 207, 187);
  border-radius: 10px;
}

h1, h2, h3, h4, ul, li, a, input, label, button, div, footer{
  margin: 0;
  padding: 10px;
  font-family: 'Quicksand', sans-serif;
  color: #444;
}
nav{
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 80px;
}
input{
  padding: 10px 12px;
  border-radius: 4px;
  border: 1px solid #ddd;
  font-size: 1em;
  width: 100%;
}
label{
  display: block;
  margin: 20px 0 10px;
}
button{
  margin-top: 30px;
  border-radius: 36px;
  background: #FEE996;
  border:0;
  font-weight: 700;
  font-size: 0.8em;
  display: block;
  padding: 10px 16px;
  letter-spacing: 2px;
  min-width: 130px;
}
.post {
    
    width: 80%;
    position: relative;
    padding: 10px;
    margin: 10px auto;
    /*border: 1px solid gray;*/   
    text-align: left;
    display: flex;
    flex-direction: column;
    word-wrap: break-word;
    word-break: break-all;
}
.postHeader {
  justify-content: space-between;
  display:flex;
  flex-direction: row-reverse;
  padding: 10px;
}
.center {
  margin: auto;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  margin: 10px auto;
  width: 30%; 
}
.container {
  display: flex;
  justify-content: center;
}
.main-view {
  display: flex;
  height: 100%;
}

.posts-container {
  flex: 3;
  display: flex;  
  flex-direction: column;
  align-items: center;
}

.side-panel {
  flex: 1;
  margin-top: 5px;
  border-radius: 10px;
  background-color: #ddd;
  /*height: 100%; */
}



.button-container {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

}

.delete-button,
.add-button {
  border-radius: 50px;
  background: #fee996;
  border: 10;
  font-weight: 700;
  font-size: 0.8em;
  padding: 10px 16px;
  letter-spacing: 2px;
  min-width: 130px;
}

.delete-button {
  background-color: #ff6666; /* Adjust the color as needed */
}

.add-button {
  background-color: #66ff66; /* Adjust the color as needed */
}
</style>



