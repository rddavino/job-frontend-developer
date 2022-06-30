<template>
  <!-- <PaginaInicial /> -->
  <PaginaProduto />
</template>

<script>
// import PaginaInicial from '././components/paginas/PaginaInicial.vue'
import PaginaProduto from '././components/paginas/PaginaProduto.vue'


export default {
  name: 'App',
  components: {
    // PaginaInicial
    PaginaProduto
  },

  data() {
    return {
      tituloPagina: `Destaques da Loja`
    }
  },


}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');


body {
  margin: 0 auto;
  font-family: 'Roboto', sans-serif;

}
</style>
