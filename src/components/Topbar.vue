<template>
  <div class="newtopbar">
    <button class="menu-toggle">
      <span class="menu-icon"></span>
    </button>
    <div class="topbar">
      <div class="logo child">
        <img src="../assets/img/logo.png" alt="logo" />
      </div>
      <div class="location child">
        <div><img src="../assets/img/location-icon.png" alt="loca" /></div>
        <div class="locationtext">Deliver to Nigeria</div>
      </div>
      <div class="search child">
        <div id="all">
          <div>All</div>
          <img src="../assets/img/arrowdown.png" alt="arr" />
        </div>
        Search Amazon
        <div class="searchsign">
          <img src="../assets/img/searchsign.png" alt="" />
        </div>
      </div>
      <div class="lang child">
        <div><img src="../assets/img/flag.png" alt="" /></div>
        EN
        <div><img src="../assets/img/dropdown2.png" alt="" /></div>
      </div>

      <div class="account child" @click="logout()">
        <p id="line1">Click to Logout</p>
        <p id="line2">Account</p>
      </div>
      <div class="returnorder child">
        <p id="line1">Returns</p>
        <p id="line2">& Orders</p>
      </div>
      <div class="cart child" @click="checkoutFunction()">
        <div><img src="../assets/img/cart.png" alt="cart" /></div>
        <div id="carttext">Cart</div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import Cookies from 'js-cookie';
Vue.use(VueAxios, axios);
export default {
  name: "TopBar",
  methods: {
    async logout() {
      await this.axios.get("https://ecommercewithnest.onrender.com/user/logout", {withCredentials: true}).then((resp) => {
        Cookies.remove('ecommercetoken');
        console.log(resp);
      });
    },
    async checkoutFunction() {
      const userNo = Cookies.get('ecommercetoken');
      await this.axios.post(`https://ecommercewithnest.onrender.com/user/checkout/${userNo}`).then((resp) => console.log(resp))
    }
  },
  mounted() {
    const menuBtn = document.querySelector(".menu-icon");
    const topBar = document.querySelector(".topbar");

    menuBtn.addEventListener("click", function () {
      topBar.classList.toggle("show");
    });
  },
};
</script>

<style scoped>
.topbar {
  /* min-width: 100%;
    width: max-content; */
  width: inherit;
  height: 67px;
  background: #0f1111;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  padding-left: 0px;
}
.child {
  /* background-color: ; */
  max-width: 100px;
  display: flex;
}
.logo {
  min-width: 100px;
  max-width: 180px;
  height: 100%;
}
.logo img {
  width: 100%;
}
.location {
  align-items: center;
  justify-content: space-between;
  width: 89px;
  padding: 5px;
  min-height: 50px;
}
.location .locationtext {
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;
  display: flex;
  align-items: flex-end;
  text-align: center;
  color: #ffffff;
}
.search {
  max-width: 600px;
  min-width: 380px;
  height: fit-content;
  align-items: center;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  padding: 0px;
  border-radius: 5px;
}
.search div {
  display: flex;
}
.search #all {
  min-width: 67px;
  height: 39px;
  border-right: 1px solid #000000;
  align-items: center;
  justify-content: center;
}
.searchsign {
  min-width: 58px;
  height: 39px;
  background-color: #febd69;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
}
.searchsign img {
  width: 24px;
  height: 24px;
  align-items: center;
}
.lang {
  min-width: 50px;
  max-width: 90px;
  padding: 10px;
  height: 100%;
  align-items: center;
  display: flex;
  align-content: center;
  justify-content: center;
  font-style: normal;
  font-weight: 700;
  font-size: 19px;
  line-height: 22px;
  color: #ffffff;
}
.account {
  min-width: 85px;
  max-width: 115px;
  height: 100%;
  display: block;
}
.account #line1 {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
  text-align: center;
  margin-bottom: 0px;
}
.account #line2 {
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  color: #ffffff;
  text-align: center;
  margin-top: 2px;
}
.returnorder {
  display: block;
  min-width: 60px;
  height: 100%;
}
.returnorder #line1 {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
  text-align: center;
  margin-bottom: 0px;
}
.returnorder #line2 {
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  color: #ffffff;
  text-align: center;
  margin-top: 2px;
}
.cart {
  width: fit-content;
  height: 43px;
}
.cart #carttext {
  padding-top: 14px;
  padding-right: 10px;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 19px;
  color: #ffffff;
}

/* Styles for the menu toggle button */
.menu-toggle {
  display: none; /* hide the button by default */
}

.menu-icon {
  display: block;
  width: 30px;
  height: 30px;
  background-image: url("../assets/img/hamburger-menu.svg");
  background-size: cover;
}

/* Media query for phone screen size */
@media (max-width: 480px) {
  /* Hide the navigation by default */
  .topbar {
    display: none;
  }

  /* Show the menu toggle button */
  .menu-toggle {
    display: block;
    margin-right: 10px;
  }

  /* Styles for the navigation when the menu toggle button is clicked */
  .menu-toggle.active + .topbar {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 60px; /* adjust this value based on your design */
    right: 0;
    width: 100%;
    background-color: white;
    z-index: 1;
  }

  /* Styles for the navigation items when the menu toggle button is clicked */
  .menu-toggle.active + .topbar .child {
    margin: 10px;
  }
}
</style>
