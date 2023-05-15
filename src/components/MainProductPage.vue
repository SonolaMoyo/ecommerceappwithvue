<template>
  <div class="mainproductpage">
    <div class="cover">
      <div class="productnames">
        <p id="name">
          {{ product.productName }}
        </p>
        <div
            class="productimg"
            :style="{ backgroundImage: `url(${product.imgLink})` }"
          ></div>
        <p class="website asidename">
          <a :href="product.websiteLink">Visit this product store</a>
        </p>
        <div class="rating asidename">
          <p id="rate">{{ product.rating }}</p>
          <div id="star"><img src="../assets/img/star-rate.png" alt="" /></div>
          <p id="rateamount">({{ product.rateAmount }})</p>
        </div>
        <p class="section asidename">
          {{ product.category }}
        </p>
      </div>
      <div class="details">
        <p>List Price: ${{ product.price }}</p>
        <p>Price: ${{ product.price }}</p>
        <p>You Save: 0.00 (0%)</p>
        <p>
          No Import Fees Deposit & ${{ product.price / 10 }} Shipping to Nigeria
        </p>
        <p>
          Available at a Lower price from Others Sellers that may not offer free
          Prime shipping
        </p>
        <div id="productbenefits">
          <div
            class="benefits"
            v-for="benefit in product.productBenefits"
            v-bind:key="benefit._id"
          >
            <p class="benefittitle">
              <strong>{{ benefit.title }}</strong>
            </p>
            <p>{{ benefit.benefit }}</p>
          </div>
          <!-- <div class="benefits">
                <p class="benefittitle"><strong>Product Benefits</strong></p>
                <p>Strengthening</p>
            </div> -->
        </div>
      </div>
      <button :class="{'added': addedToCart}" @click="toggleCart(product._id)"><strong>{{ buttonText }}</strong></button>
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
  name: "MainProductPage",
  data() {
    return { product: undefined, addedToCart: false,
      buttonText: 'Add to Cart',};
  },
  methods: {
    toggleCart(productId) {
      if (this.addedToCart) {
        this.removeFromCart(productId);
      } else {
        this.addToCart(productId);
      }
      this.addedToCart = !this.addedToCart;
      this.buttonText = this.addedToCart ? 'Remove from Cart' : 'Add to Cart';
    },
    async addToCart(productId) {
      const userNo = Cookies.get('ecommercetoken');
      await Vue.axios.post(`https://ecommercewithnest.onrender.com/user/cart/${userNo}/${productId}`);
    },
    async removeFromCart(productId){
      const userNo = Cookies.get('ecommercetoken');
      await Vue.axios.delete(`https://ecommercewithnest.onrender.com/user/cart/${userNo}/${productId}`);
    }
  },
  mounted() {
    const productId = this.$route.params.product;
    Vue.axios.get(`http://127.0.0.1:3000/product/${productId}`).then((resp) => {
      this.product = resp.data.product;
    });
  },
};
</script>

<style scoped>
* {
  padding: 0px;
  margin: 0px;
}
.mainproductpage {
  width: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  padding: 10px;
}
.cover {
  max-width: 650px;
  height: fit-content;
  display: flex;
  flex-direction: column;
}
.productnames {
  border-bottom: 1px solid #000;
}
#name {
  font-family: Inter;
  font-size: 24px;
  font-weight: 700;
  line-height: 35px;
  letter-spacing: 0em;
  text-align: left;
}
.asidename {
  font-family: Arial;
  font-size: 14px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;
  color: #007185;
}
.rating {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.rating #star {
  align-self: center;
  display: flex;
  align-items: center;
}
.details {
  font-family: Arial;
  font-size: 18px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;
}
#productbenefits {
  padding-top: 5px;
}
.benefits {
  display: flex;
  flex-direction: row;
  height: fit-content;
}
.benefittitle {
  max-width: 90px;
  margin-right: 15px;
}
button {
  height: 50px;
  max-width: 640px;
  margin: 5px;
  font-family: Arial;
  font-size: 18px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0em;
  color: #fff;
  background-color: #007185;
  border-radius: 10px;
}

.productimg {
  width: 100%;
  height: 290px;
  background: #d9d9d9;
}

.added {
  background-color: red;
  color: white;
}
</style>
