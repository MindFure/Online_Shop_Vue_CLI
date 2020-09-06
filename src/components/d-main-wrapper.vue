<template>
  <div id="d-main-wrapper">
   <h1>Говно </h1>
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

<style>
.d-main-wrapper{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 900px;
    margin: 0 auto;

}
</style>