<template>
  <!-- <div class="signup">
        <div class="cover">
            <form id="mainform" action="">
                <input type="text" placeholder="FirstName">
                <input type="text" placeholder="LastName">
                <input type="text" placeholder="Email">
                <input type="number" placeholder="Phone Number">
                <input type="password" placeholder="Password">
                <input type="password" placeholder="Re-enter Password">
            </form>
        </div>
    </div> -->
  <div class="signup-container">
    <h2>Sign Up</h2>
    <form @submit.prevent="signup">
      <label for="name">Name:</label>
      <input
        type="text"
        v-model="name"
        placeholder="Enter your name"
        id="name"
        required
      />
      <label for="email">Email:</label>
      <input
        type="email"
        v-model="email"
        placeholder="Enter a valid email"
        id="email"
        required
      />
      <label for="phone">Phone Number:</label>
      <input
        type="tel"
        v-model="phone"
        placeholder="Phone Number"
        id="phone"
        required
      />
      <label for="password">Password:</label>
      <input
        type="password"
        v-model="password"
        placeholder="password"
        id="password"
        required
      />
      <button type="submit">Sign Up</button>
    </form>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      password: "",
      errorMessage: "",
    };
  },
  methods: {
    async signup() {
      try {
        const obj = {
          name: this.name,
          email: this.email,
          password: this.password,
          phoneNumber: this.phone,
        };
        console.log(obj);
        await this.axios
          .post("https://ecommercewithnest.onrender.com/user/create", obj)
          .then((resp) => {
            //console.log(resp)
            if (resp.status < 300) {
              this.$router.push("/signin");
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
/* .signup{
    width: 100vh;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    justify-items: center;
    align-content: center;
}
.cover{
    width: 650px;
    height: fit-content;
    background-color: aliceblue;
    box-shadow: 10px blue;
}
#mainform{
}
.form{
} */

.signup-container {
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
