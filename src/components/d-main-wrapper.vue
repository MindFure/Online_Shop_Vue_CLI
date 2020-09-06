<template>
  <div id="d-main-wrapper">
   
    <dCatalog />
    <dCart />
  </div>
</template>

<script>


import dCatalog from './d-catalog.vue'
import dCart from './d-cart.vue'

export default {
  name: 'd-main-wrapper',
  components: {
   dCatalog,
   dCart
  }
}
</script>

<style lang="scss">
#d-main-wrapper{
    
    max-width: 900px;
    margin: 0 auto;

}
</style>