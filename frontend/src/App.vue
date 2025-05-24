<script>
import HelloWorld from "./components/HelloWorld.vue";
import Header from "./components/Header.vue";
import MainContent from "./components/MainContent.vue";

export default {
  name: "App",
  components: {
    Header,
    MainContent,
    HelloWorld,
  },
};
</script>

<template>
  <v-app>
    <div class="overall-style">
      <Header />
    </div>

    <div id="content">
      <HelloWorld />
    </div>
  </v-app>
</template>

<style scoped>
/* Gaya umum untuk aplikasi */


</style>
