<template>
  <div class="form">
    <h3>SignUp</h3>
    <label for="email">Email</label>
    <input type="email" name="email" required v-model="email">
    <label for="password">Password</label>
    <input type="password" name="password" required v-model="password">
    <p class="error-message" v-if="errorMessage">{{ errorMessage }}</p>
    <button @click="SignUp" class="SignUp">SignUp</button>
  </div>
</template>

<script>
export default {
  name: "SignUp",

  data: function () {
    return {
      email: "",
      password: "",
      errorMessage: "",
    };
  },
  methods: {
    SignUp() {
      if (!this.email || !this.password) {
        this.errorMessage = "Please enter both email and password";
        return;
      }

      var data = {
        email: this.email,
        password: this.password,
      };

      fetch("http://localhost:3000/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Server response:", data);

          if (data.error) {
            console.log("Error message:", data.error);

            // Adjust the condition based on the actual error message structure
            if (data.error.includes("email")) {
              this.errorMessage = "Email address is already in use";
            } else {
              this.errorMessage = "An error occurred during sign up";
            }
          } else {
            console.log("Successful sign up:", data);
            this.$router.push("/");
          }
        })
        .catch((e) => {
          console.log("Error during fetch:", e);
          this.errorMessage = "This email address has already been used";
        });
    },
  },
};
</script>

<style scoped>
.error-message {
  color: red;
  margin-top: 5px;
}
.form {
  max-width: 420px;
  margin: 30px auto;
  background: rgb(167, 154, 154);
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
h3 {
  text-align: center;
  color: rgb(8, 110, 110);
}
label {
  color: rgb(8, 110, 110);
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.8em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid white;
  color: blue;
}
button {
  background: rgb(8, 110, 110);
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
  align-items: center;
  text-align: center;
}
</style>