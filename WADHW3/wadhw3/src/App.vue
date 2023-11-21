<template>
  <nav>
    <router-link to="/" class="nav-link">Main</router-link>
    <router-link to="/login" class="nav-link">Login</router-link>
    
    <a class="logo" > 
      <img src="./assets/me.png" width="50" height="50" alt="My picture" id="profilePic" @click="toggleDropDown" />
    </a>
  </nav>
  <drop-down-compo v-show="isDropdownOpen"></drop-down-compo>
  <router-view/>
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
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
    float: right;
    margin-right: 20px; /* Add margin for spacing from the right edge */
}

/* Style for the logo image */
.logo img {
    width: 30px;
    height: 30px;
    border-radius: 50%; /* Make it a circle */
    cursor: pointer; /* Change cursor to a pointer on hover */
}

/* Style for the logo in the far right corner */
.logo {
    position: absolute;
    top: 0;
    right: 0;
    margin: 16x 16px;
}


</style>
