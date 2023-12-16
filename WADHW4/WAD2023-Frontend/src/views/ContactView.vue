<template>
  <div class="form">
    <h1>Get in touch</h1>
    <div class="contacts">
      <h3>Email: info@gmail.com</h3>
      <h3>Phone: +372 321 6782</h3>
      <h3>Address: Narva mnt 18</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact us",
}
</script>
<style scoped>
.form {
  max-width: 420px;
  margin: 30px auto;
  background: rgb(167, 154, 154);
  text-align: center;
  padding: 40px;
  border-radius: 10px;
}
.contacts{
  max-width: 300px;
  margin: 30px auto;
  align-self: center;
  font-size: larger;
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
.center {
  margin: auto;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  width: 30%; 
}
.container {
  display: flex;
  justify-content: center;
}
</style>