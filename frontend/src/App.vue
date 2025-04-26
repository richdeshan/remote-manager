<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld  // Daftarkan komponen HelloWorld di bagian components
  }
}
</script>


<template>
  <div id="app">
    <HelloWorld />  <!-- Menambahkan komponen HelloWorld -->
  </div>
</template>


<style>
/* Gaya umum untuk aplikasi */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>