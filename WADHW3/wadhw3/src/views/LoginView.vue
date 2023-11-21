<template>
    <div class="signup">
      <div class="input-container">
        <label for="email">Email</label>
        <input type="text" id="email" required placeholder="Email">
      </div>
      <div class="input-container">
        <label for="password">Password</label>
        <input type="password" id="password" required placeholder="Password">
      </div>
      <!-- button for creating post -->
      <button>Signup</button>
    </div>
  </template>
  
  <style>
  .signup {
    width: 80%;
    height: 500px;
    border-radius: 20px;
    background-color: rgb(103, 89, 70);
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
  
  /* Style the input containers */
  .input-container {
    display: flex;
    justify-content: space-between; /* Align items with space between them */
    width: 50%; /* Each input container takes half the width */
    margin-bottom: 20px;

  }
  
  .input-container label {
    color: #999;
    font-size: 150%;
    margin-right: 10px;
  }
  
  .input-container input {
    width: 70%; /* Adjust as needed */
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
    text-align: center;
  }
  
  /* Style the login button */
  button {
    background-color: #333;
    color: #fff;
    border: none;
    padding: 15px 30px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    font-size: 100%;
    margin-top: 4%;
  }
  
  button:hover {
    background-color: #555;
  }
  </style>