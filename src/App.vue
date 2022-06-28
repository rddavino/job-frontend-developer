<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <CabecalhoPagina />
</template>

<script>
import CabecalhoPagina from './components/compartilhados/CabecalhoPagina.vue';
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    CabecalhoPagina
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');


body {
  margin: 0 auto;
  font-family: 'Roboto', sans-serif;

}
</style>
