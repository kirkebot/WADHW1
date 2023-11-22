<template>
    <div class="signup">
        <h3>Welcome to PostIt</h3>
    
        <p>Please signup</p>
        <div class="input-container">
            <input v-model.trim.lazy="email" type="text" required placeholder="Email" id="email">  
        </div>
        <div class="input-container">
            <input v-model.trim.lazy="password" type="password" required placeholder="Password" id="password">
        </div>    

        <button id="login-button" @click="handleLogin">Signup</button>
        <div class="error-message" id="error-message" style="color: red;"> {{ errorMessage }} </div>
    
    </div>
</template>

<script>
   export default {
   name: "MainView",
   computed: {

   },
   components: {},
   data() {
    return {
      email: '',
      password: '',
      errorMessage: '',
    };
  },
   
   methods: {
    handleLogin() {
        let errors = [];
        let indexOfError = 1;
    if (this.email === "" || this.password === "") {
        errors.push(indexOfError +". Insert both Email and password.");
        indexOfError = indexOfError + 1
    }

    // Check all the password conditions
    if (this.password.length < 8 || this.password.length > 15) {
        errors.push(indexOfError +". Password should be at least 8 characters and less than 15 characters.");
        indexOfError = indexOfError + 1
    }

    if (this.password.toLowerCase() === this.password) {
        errors.push(indexOfError +". Password should include at least one uppercase character.");
        indexOfError = indexOfError + 1
    }
    if ((this.password.match(/[a-z]/g) || []).length < 2) {
      errors.push(indexOfError + ". Password should include at least two lowercase characters.");
      indexOfError = indexOfError + 1;
    }

    
    if (!/\d/.test(this.password)) {
      errors.push(indexOfError + ". Password should include at least one numeric value.");
      indexOfError = indexOfError + 1;
    }

    if (!/_/.test(this.password)) {
      errors.push(indexOfError + ". Password should include the character '_'.");
      indexOfError = indexOfError + 1;
    }

    if (errors.length > 0) {
        errors.unshift("We found the following problems with your signup:");
        // Combine error messages into a single string
        this.errorMessage = errors.join("\n");
        
    }
    
     else {
        this.errorMessage = ""; // Clear any previous error message
        // Redirect to index.html (you may need to adjust the path)
        this.$router.push('/');
    }
        
    }
    }
}


   </script>

   <style>


@media (min-width: 1000px) {
    .flex-container {
        flex-direction: row;
    }
}

  .signup {
    position: relative;
    width: 80vh; 
    height: 420px;
    border-radius: 30px;
    background-color: rgba(160, 150, 150);
    display: flex;
    flex-direction: column; /* Stack items vertically */
    justify-content: center;
    align-items: center;
    color: #fff;
    font-family: Arial, sans-serif;
    margin: 0 auto;
    margin-bottom: 5%;
    margin-top: 5%;
  }
  .signup h3{
    position:absolute;
    top: 20px;
  }
  
  /* Style the input containers */
  .input-container {
    display: flex;
    justify-content: center; /* Align items with space between them */
    width: 50%; /* Each input container takes half the width */
    margin-bottom: 20px;

  }
  
  .input-container label {
    color: #999;
    font-size: 150%;
    margin-right: 10px;
  }
  
  .input-container input {
    width: 100%; /* Adjust as needed */
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
}

.input-container label {
    position: absolute;
    left: 10px;
    top: 12px;
    color: #999;
    font-size: 16px;
    pointer-events: none;
    transition: top 0.3s ease, left 0.3s ease, font-size 0.3s ease;
}

/* Move label up and reduce font size when input is focused */
.input-container input:focus + label,
.input-container input:valid + label {
    top: -10px;
    left: 5px;
    font-size: 12px;
    color: #333;
}

/* Style the login button */
button {
    background-color: #333;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #555;
}

p.bluet {

    color: blue;
}
.error-message {
  white-space: pre-line; /* Ensures that line breaks are respected */
}
 
</style>
    