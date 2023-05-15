<template>
  <div id="app">
    <TopBar />
    <!-- <AccessoriesSection />
    
    <ProductPage />

    <MainProductPage />

    <SignUp />

    <LogIn /> -->

    <router-view></router-view>

    <FooterPage />
  </div>
</template>

<script>
import TopBar from './components/Topbar.vue'
import FooterPage from './components/Footer.vue'
// import AccessoriesSection from './components/Accessories.vue'
// import ProductPage from './components/ProductPage.vue'
// import MainProductPage from './components/MainProductPage.vue'
// import SignUp from './components/Signup.vue'
// import LogIn from './components/Login.vue'

export default {
  name: 'App',
  components: {
    TopBar,
    FooterPage,
    // AccessoriesSection,
    // ProductPage,
    // MainProductPage,
    // SignUp,
    // LogIn
  }
}
</script>

<style>
body {
  margin: 0px;
  padding: 0px;
  font-family: 'Inter';
}
</style>
