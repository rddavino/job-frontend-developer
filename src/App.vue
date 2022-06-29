<template>
  <CabecalhoPagina />
  <VitrinePagina :tituloPagina=tituloPagina />
  <RodapePagina />
</template>

<script>
import CabecalhoPagina from './components/compartilhados/CabecalhoPagina.vue';
import RodapePagina from './components/compartilhados/RodapePagina.vue';
import VitrinePagina from './components/compartilhados/VitrinePagina.vue';

export default {
  name: 'App',
  components: {
    CabecalhoPagina,
    RodapePagina,
    VitrinePagina
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
