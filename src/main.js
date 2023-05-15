import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import AccessoriesSection from './components/Accessories.vue'
import ProductPage from './components/ProductPage.vue'
import VueRouter from 'vue-router'
import MainProductPage from './components/MainProductPage.vue'
import SignUp from './components/Signup.vue'
import LogIn from './components/Login.vue'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)
const routes = [
  {path: '/', component:AccessoriesSection},
  {path: '/signin', component:LogIn},
  {path: '/signup', component:SignUp},
  {path: '/products', component:ProductPage},
  {path: '/products/:category', component:ProductPage},
  {path: '/products/category/:product', component:MainProductPage}
]
const router = new VueRouter({
  routes
})

new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
