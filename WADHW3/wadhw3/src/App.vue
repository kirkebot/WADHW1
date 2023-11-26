<template>
  <nav>
    <router-link to="/" class="nav-link">Main</router-link>
    <!--login is the same as signup in this code -->
    <router-link to="/login" class="nav-link">Signup</router-link>
    
    <a class="logo" > 
      <img src="./assets/me.png" width="50" height="50" alt="My picture" id="profilePic" @click="toggleDropDown" />
    </a>
  </nav>
  <drop-down-compo v-show="isDropdownOpen"></drop-down-compo>
  <router-view/>
  <footer>
        <p>2023 PostIt. All rights reserved.</p>
    </footer>
</template>

<script>
import DropDownCompo from "@/components/DropDownCompo.vue";
export default {
    name: "App",
    components: { DropDownCompo },
    computed: {
      isDropdownOpen: function(){
        return this.$store.state.isDropdownOpen;
    },  
  },
    methods: {
      toggleDropDown: function(){ 
          this.$store.dispatch("toggleDropdown")
        },
    
      }
    }
  
</script>


<style>
body {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    margin: 0;
}
/*#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  flex: 1;
  position: relative;
}*/

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}


nav {
    overflow: hidden;
    background-color: #333;
}

/* Style for navigation bar links */
nav .nav-link {
    float: left;
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

/* On hover, change the background color and text color of navigation links */
nav .nav-link:hover {
    background-color: #ddd;
    color: black;
}

.logo {
    margin-right: 20px; /* Add margin for spacing from the right edge */
}

/* Style for the logo image */
.logo img {
    width: 30px;
    height: 30px;
    border-radius: 50%; /* Make it a circle */
    cursor: pointer; /* Change cursor to a pointer on hover */
    margin-top: 16px; /* Adjust the margin-top */
    margin-right: 16px; /* Adjust the margin-right */
  }

/* Style for the logo in the far right corner */
.logo {
    position: absolute;
    top: 0;
    right: 0;
    margin: 16x 16px;
}
/* Style for the footer */
.footer {
  position: relative;
  width: 100%;
  background: #3586ff;
  min-height: 100px;
  padding: 20px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

</style>
