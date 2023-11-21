<template>
  
    <div class="login-box">
        <h3>Welcome to PostIt</h3>
        <p class = "bluet">Create an account</p>
        <p>or</p>
        <p>Please log in</p>
        <div class="input-container">
            <input v-model.trim.lazy="email" type="text" id="email" required>
            <label for="email">Email</label>
        </div>
        <div class="input-container">
            <input v-model.trim.lazy="password" type="password" id="password" required>
            <label for="password">Password</label>
        </div>    

        <button id="login-button" @click="handleLogin">Login</button>
        <p id="error-message" style="color: red;"> {{ errorMessage }} </p>
        <p class="bluet">>Forgot password</p>
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
        if (this.email === "" || this.password === "") {
            this.errorMessage = "Insert both Email and password";
        } else {
            this.errorMessage = ""; // Clear any previous error message
            // Redirect to index.html (you may need to adjust the path)
            this.$router.push('/');
        }
        }
    }
   }

   </script>

   <style>
.login-box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px;
    width: 300px;
    height: 400px;
    border-radius: 10px;
    background-color: #aa9f9f;
    max-width: 90%;
    text-align: center;

}

@media (min-width: 1000px) {
    .flex-container {
        flex-direction: row;
    }
}

.login-box h2 {
    font-size: 24px;
    margin-bottom: 20px;
}

/* Style the input containers */
.input-container {
    position: relative;
    margin-bottom: 20px;
}

.input-container input {
    width: 100%;
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

</style>