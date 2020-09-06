<template>
  <div id="app">
   <dMainWrapper />
  </div>
</template>

<script>


import dMainWrapper from './components/d-main-wrapper.vue'
export default {
  name: 'App',
  components: {
   dMainWrapper
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
