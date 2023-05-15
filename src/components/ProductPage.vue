class
<template>
  <div class="productpage">
    <div id="cover">
      <h2 id="title">Results </h2>
      <p id="desc">Price and other details may vary based on product size and color.</p>
      <div class="products">
        <div
          class="product"
          v-for="product in products"
          v-bind:key="product._id"
          @click="openProduct(product._id)"
        >
          <div
            class="productimg"
            :style="{ backgroundImage: `url(${product.imgLink})` }"
          ></div>
          <p class="productdesc">
            {{ product.productName }}
          </p>
          <p class="productquantity">{{ product.quantity }}</p>
          <div class="productrating">
            <p>{{ product.rating }}</p>
            <div><img src="../assets/img/star-rate.png" alt="" /></div>
            <p>{{ product.rateAmount }}</p>
          </div>
          <p class="productprice">{{ product.price }}</p>
          <p class="productdelivery">
            Delivery Fri, {{ product.delivery }} <br />
            Or fastest delivery {{ product.fastestDelivery }}
          </p>
        </div>
        <!-- <div class="product">
          <div class="productimg"></div>
          <p class="productdesc">
            Mielle Organics RoseMary Mint Scalp & Hair Strengthening Oil With
            Biotion & Essential Oils, Nourishing Treatment
          </p>
          <p class="productquantity">2 Fl Oz (Pack of 1)</p>
          <div class="productrating">
            <p>4.6</p>
            <div><img src="../assets/img/star-rate.png" alt="" /></div>
            <p>(32,216)</p>
          </div>
          <p class="productprice">$9.00</p>
          <p class="productdelivery">
            Delivery Fri, May 5 <br />
            Or fastest delivery Wed Apr 19
          </p>
        </div>
        <div class="product">
          <div class="productimg"></div>
          <p class="productdesc">
            Mielle Organics RoseMary Mint Scalp & Hair Strengthening Oil With
            Biotion & Essential Oils, Nourishing Treatment
          </p>
          <p class="productquantity">2 Fl Oz (Pack of 1)</p>
          <div class="productrating">
            <p>4.6</p>
            <div><img src="../assets/img/star-rate.png" alt="" /></div>
            <p>(32,216)</p>
          </div>
          <p class="productprice">$9.00</p>
          <p class="productdelivery">
            Delivery Fri, May 5 <br />
            Or fastest delivery Wed Apr 19
          </p>
        </div>
        <div class="product">
          <div class="productimg"></div>
          <p class="productdesc">
            Mielle Organics RoseMary Mint Scalp & Hair Strengthening Oil With
            Biotion & Essential Oils, Nourishing Treatment
          </p>
          <p class="productquantity">2 Fl Oz (Pack of 1)</p>
          <div class="productrating">
            <p>4.6</p>
            <div><img src="../assets/img/star-rate.png" alt="" /></div>
            <p>(32,216)</p>
          </div>
          <p class="productprice">$9.00</p>
          <p class="productdelivery">
            Delivery Fri, May 5 <br />
            Or fastest delivery Wed Apr 19
          </p>
        </div>
        <div class="product">
          <div class="productimg"></div>
          <p class="productdesc">
            Mielle Organics RoseMary Mint Scalp & Hair Strengthening Oil With
            Biotion & Essential Oils, Nourishing Treatment
          </p>
          <p class="productquantity">2 Fl Oz (Pack of 1)</p>
          <div class="productrating">
            <p>4.6</p>
            <div><img src="../assets/img/star-rate.png" alt="" /></div>
            <p>(32,216)</p>
          </div>
          <p class="productprice">$9.00</p>
          <p class="productdelivery">
            Delivery Fri, May 5 <br />
            Or fastest delivery Wed Apr 19
          </p>
        </div>
        <div class="product">
          <div class="productimg"></div>
          <p class="productdesc">
            Mielle Organics RoseMary Mint Scalp & Hair Strengthening Oil With
            Biotion & Essential Oils, Nourishing Treatment
          </p>
          <p class="productquantity">2 Fl Oz (Pack of 1)</p>
          <div class="productrating">
            <p>4.6</p>
            <div><img src="../assets/img/star-rate.png" alt="" /></div>
            <p>(32,216)</p>
          </div>
          <p class="productprice">$9.00</p>
          <p class="productdelivery">
            Delivery Fri, May 5 <br />
            Or fastest delivery Wed Apr 19
          </p>
        </div>
        <div class="product">
          <div class="productimg"></div>
          <p class="productdesc">
            Mielle Organics RoseMary Mint Scalp & Hair Strengthening Oil With
            Biotion & Essential Oils, Nourishing Treatment
          </p>
          <p class="productquantity">2 Fl Oz (Pack of 1)</p>
          <div class="productrating">
            <p>4.6</p>
            <div><img src="../assets/img/star-rate.png" alt="" /></div>
            <p>(32,216)</p>
          </div>
          <p class="productprice">$9.00</p>
          <p class="productdelivery">
            Delivery Fri, May 5 <br />
            Or fastest delivery Wed Apr 19
          </p>
        </div>
        <div class="product">
          <div class="productimg"></div>
          <p class="productdesc">
            Mielle Organics RoseMary Mint Scalp & Hair Strengthening Oil With
            Biotion & Essential Oils, Nourishing Treatment
          </p>
          <p class="productquantity">2 Fl Oz (Pack of 1)</p>
          <div class="productrating">
            <p>4.6</p>
            <div><img src="../assets/img/star-rate.png" alt="" /></div>
            <p>(32,216)</p>
          </div>
          <p class="productprice">$9.00</p>
          <p class="productdelivery">
            Delivery Fri, May 5 <br />
            Or fastest delivery Wed Apr 19
          </p>
        </div>
        <div class="product">
          <div class="productimg"></div>
          <p class="productdesc">
            Mielle Organics RoseMary Mint Scalp & Hair Strengthening Oil With
            Biotion & Essential Oils, Nourishing Treatment
          </p>
          <p class="productquantity">2 Fl Oz (Pack of 1)</p>
          <div class="productrating">
            <p>4.6</p>
            <div><img src="../assets/img/star-rate.png" alt="" /></div>
            <p>(32,216)</p>
          </div>
          <p class="productprice">$9.00</p>
          <p class="productdelivery">
            Delivery Fri, May 5 <br />
            Or fastest delivery Wed Apr 19
          </p>
        </div> -->
      </div> 
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
export default {
  name: "ProductPage",
  data() {
    return { products: undefined };
  },
  methods: {
    openProduct(id) {
      this.$router.push(`/products/category/${id}`);
    },
  },
  mounted() {
    const category = this.$route.params.category;

    if (category) {
      Vue.axios
        .get(`http://127.0.0.1:3000/product/productByCategory/${category}`)
        .then((resp) => {
          this.products = resp.data.products;
          //console.log(this.$route.params.category);
        });
    } else {
      Vue.axios.get("http://127.0.0.1:3000/product").then((resp) => {
        this.products = resp.data.products;
        //console.log(this.$route.params.category);
      });
    }
  },
};
</script>

<style scoped>
* {
  margin: 0px;
  padding: 0px;
}
.productpage {
  width: inherit;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
}
#cover {
  max-width: 1000px;
}
#title {
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 34px;
  margin-top: 20px;
  margin-bottom: 5px;
}
#desc {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  margin-bottom: 30px;
}
.products {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
}
.product {
  width: 306px;
  height: 491px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
  margin-bottom: 18px;
}
.productimg {
  width: 95%;
  height: 290px;
  background: #d9d9d9;
}
.productdesc {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
}
.productquantity {
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
}
.productrating {
  display: flex;
  align-content: center;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
}
.productprice {
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 34px;
}
.productdelivery {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
}
</style>
