<template>
  <div id="d-catalog">
   <h1> Catalog </h1>
   
   <dCatalogItem 
   v-for="product in products"
   :key="product.article"
   v-bind:product_data="product"
   />

  </div>
</template>

<script>


import dCatalogItem from './d-catalog-item.vue'
export default {
  name: 'd-catalog',
  components: {
   dCatalogItem
  },
  data(){
    return{
      products: [
    {
      image: "1.jpg",
      name: "Clock-1",
      price: 2100.234234234,
      article: "T1",
      available: true,
      category: "Мужские"
    },
    {
      image: "2.jpg",
      name: "Clock-2",
      price: 3150.12312412,
      article: "T2",
      available: true,
      category: "Женские"
    },
    {
      image: "3.jpg",
      name: "Clock-3",
      price: 4200.51524,
      article: "T3",
      available: false,
      category: "Женские"
    },
    
  ]
    }
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