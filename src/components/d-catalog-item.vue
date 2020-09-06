<template>
  <div id="d-catalog-item">
    <img v-bind:src=" require('../assets/imges/' + product_data.image)" alt="gg">
   <p class="d-catalog-item_name">{{product_data.name}} </p>
   <p class="d-catalog-item_price">Price: {{product_data.price}} </p>
   <button class="d-catalog-item_add_cart"> Add cart</button>
  </div>
</template>

<script>



export default {
  name: 'd-catalog-item',
  components: {
   
  },
  props:{
    product_data:{
      type: Object,
      default(){
        return{}
      }
    }
  },
}
</script>

<style lang="scss">
@import './src/assets/styles/variables.scss';
#d-catalog-item{
  flex-basis: 25%;
  box-shadow: 0 0 8px 0 #cf1313;
  padding: $padding*2;
  margin-bottom: $margin*6;
}
</style>