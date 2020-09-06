<template>
  <div id="d-catalog">
   <h1> Catalog </h1>
   
   <dCatalogItem 
   v-for="product in PRODUCTS"
   :key="product.article"
   v-bind:product_data="product"
   />

  </div>
</template>

<script>


import dCatalogItem from './d-catalog-item.vue'
import {mapActions, mapGetters}   from 'vuex'



export default {
  name: 'd-catalog',
  components: {
   dCatalogItem
  },
  computed:{
    ...mapGetters(['PRODUCTS']),
  },
  data(){
    return{
   
    }
  },
  methods:{
  ...mapActions(['GET_PRODUCTS_FROM_API']),
  },

  mounted(){
    this.GET_PRODUCTS_FROM_API();
  },

}
</script>

<style lang="scss">
#d-catalog{
  &_list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    }
}
</style>