<template>
  <div id="app">
    <TopBar />
    <AccessoriesSection />
    
    <ProductPage />
    <FooterPage />
  </div>
</template>

<script>
import TopBar from './components/Topbar.vue'
import FooterPage from './components/Footer.vue'
import AccessoriesSection from './components/Accessories.vue'
import ProductPage from './components/ProductPage.vue'

export default {
  name: 'App',
  components: {
    TopBar,
    FooterPage,
    AccessoriesSection,
    ProductPage
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
