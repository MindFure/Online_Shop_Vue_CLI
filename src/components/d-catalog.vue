<template>
  <div id="d-catalog">
   <h1> Catalog </h1>
   <dCatalogItem />
   <dCatalogItem />
   <dCatalogItem />
   <dCatalogItem />
  </div>
</template>

<script>


import dCatalogItem from './d-catalog-item.vue'
export default {
  name: 'd-catalog',
  components: {
   dCatalogItem
  }
}
</script>

<style>

</style>