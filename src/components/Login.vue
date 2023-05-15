<template>
    <div class="signin-container">
      <h2>Sign In</h2>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      <form @submit.prevent="signin">
        <label for="email">Email:</label>
        <input
          type="email"
          v-model="email"
          placeholder="Enter a valid email"
          id="email"
          required
        />
        <label for="password">Password:</label>
        <input
          type="password"
          v-model="password"
          placeholder="Enter your password"
          id="password"
          required
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  </template>
  
  <script>
  import Vue from "vue";
  import axios from "axios";
  import VueAxios from "vue-axios";
  //import Cookies from 'js-cookie';
  Vue.use(VueAxios, axios);
  export default {
    name: "LogIn",
    data() {
      return {
        email: "",
        password: "",
        errorMessage: "",
      };
    },
    methods: {
      async signin() {
        try {
          const obj = {
            email: this.email,
            password: this.password,
          };
          console.log(obj);
          await this.axios
            .post("https://ecommercewithnest.onrender.com/user/signin", obj, {withCredentials: true})
            .then((resp) => {
              console.log(resp)
              if (resp.status < 300) {
                //Cookies.set('ecommercetoken', resp.data.user._id, {expires: 7})
                console.log(`is cookies enabled: ${navigator.cookieEnabled}`)
                this.$router.push("/");
              } else {
                this.errorMessage = "Invalid credentials";
              }
            });
        } catch (error) {
          this.errorMessage = "Invalid credentials";
        }
      },
    },
  };
  </script>
  
  <style scoped>
  
  .signin-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
  }
  
  label {
    margin: 10px 0;
  }
  
  input {
    height: 30px;
    padding: 5px;
    margin-bottom: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 16px;
  }
  
  button {
    padding: 10px;
    border-radius: 5px;
    background-color: #0f1111;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
  }
  
  .error {
    color: rgb(238, 161, 161);
    margin-top: 10px;
  }
  </style>
  