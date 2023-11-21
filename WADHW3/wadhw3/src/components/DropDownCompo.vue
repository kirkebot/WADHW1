<template>
    <div class="dropdown">
      <p>John Doe</p>
      <p>john.doe@ut.ee</p>
      <router-link to="/login" class="nav-link" @click="toggleDropDown">Login</router-link>
    </div>
</template>

<script>
export default {
  name: 'DropDownCompo',
  props: {
    
  },

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
};
</script>



<style>
.dropdown {
  display: block;
    background-color: #333;
    text-align: center;
    cursor: pointer;
    position: absolute;
    top: 55px;
    right: 0.5%; 
    width: 185px; 
    height: 120px; 
    border-radius: 5%; 
    line-height: 20px; 
    color: white; 
}
.dropdown a {
    color: #ccc;
}
</style>