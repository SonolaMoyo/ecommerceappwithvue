<template>
    <div class="accessories">
        <div class="bodyimg"><img src="../assets/img/newbodyimg.png" alt=""></div>
        <div class="mainbody">
            <div class="electronicsframe">
                <div class="frame" v-for="category in categories" v-bind:key="category.category">
                    <div class="frametext">{{ category.category }}</div>
                    <div class="framebox" :style="{ backgroundImage: `url(${category.categoryImageLink})` }"></div>
                    <div class="framelink"><a @click="opencategory(category.category)">See more</a></div>
                </div>
                <!-- <div class="frame">
                    <div class="frametext">Electronics</div>
                    <div class="framebox"></div>
                    <div class="framelink"><a href="">See more</a></div>
                </div>
                <div class="frame">
                    <div class="frametext">Electronics</div>
                    <div class="framebox"></div>
                    <div class="framelink"><a href="">See more</a></div>
                </div>
                <div class="frame">
                    <div class="frametext">Electronics</div>
                    <div class="framebox"></div>
                    <div class="framelink"><a href="">See more</a></div>
                </div>
                <div class="frame">
                    <div class="frametext">Electronics</div>
                    <div class="framebox"></div>
                    <div class="framelink"><a href="">See more</a></div>
                </div>
                <div class="frame">
                    <div class="frametext">Electronics</div>
                    <div class="framebox"></div>
                    <div class="framelink"><a href="">See more</a></div>
                </div>
                <div class="frame">
                    <div class="frametext">Electronics</div>
                    <div class="framebox"></div>
                    <div class="framelink"><a href="">See more</a></div>
                </div>
                <div class="frame">
                    <div class="frametext">Electronics</div>
                    <div class="framebox"></div>
                    <div class="framelink"><a href="">See more</a></div>
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
    name: "AccessoriesSection",
    data() {
    return { categories: undefined };
  },
  methods: {
    opencategory(category){
        this.$router.push(`/products/${category}`)
    }
  },
  mounted() {
    Vue.axios.get("https://ecommercewithnest.onrender.com/product/categories").then((resp) => {
      this.categories = resp.data.categories;
    });
  },
}
</script>

<style scoped>
.accessories{
    width: inherit;
    height: fit-content;
    min-height: 200px;

}
.bodyimg{
    width: inherit;
    height: 400px;
    overflow: hidden;
}
.bodyimg img{
    width: 100%;
    height: 100%;
}
.mainbody{
    width: inherit;
    height: fit-content;
    background: #E3E6E6;
}
.electronicsframe{
    width: inherit;
    height: fit-content;
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding-top: 25px;
    padding-bottom: 20px;
    padding-right: 10px;
    padding-left: 10px;
    align-content: space-evenly;
    justify-content: space-evenly;
}
.electronicsframe .frame{
    width: 292px;
    height: 400px;
    background: #FFFFFF;
    margin: auto;
    padding: auto;
    margin-bottom: 18px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}
.electronicsframe .frame .frametext, .electronicsframe .frame .framelink{
    margin-left: 30px;
}
.electronicsframe .frame .frametext{
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #0f1111;
}
.electronicsframe .frame .framebox{
    width: 230px;
    height: 300px;
    background: #d9d9d9;
    align-self: center;
}
.electronicsframe .frame .framelink{
    text-decoration: none;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    color: #68abb7;
}
</style>