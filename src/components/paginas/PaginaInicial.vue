<template>
    <CabecalhoPagina />
    <div class="banner"></div>
    <VitrinePagina :tituloPagina="tituloPagina" :categoria="categoria" />
    <RodapePagina />

</template>

<script>
import CabecalhoPagina from '../compartilhados/CabecalhoPagina.vue';
import RodapePagina from '../compartilhados/RodapePagina.vue';
import VitrinePagina from '../compartilhados/VitrinePagina.vue';

export default {
    name: 'PaginaInicial',
    components: {
        CabecalhoPagina,
        RodapePagina,
        VitrinePagina,
    },

    data() {
        return {
            tituloPagina: `Destaques da Loja`,
            categoria: null
        }
    },


}
</script>

<style>
.banner {
    width: 100%;
    height: 400px;
    background-image: url("https://img.freepik.com/fotos-gratis/um-cara-divertido-e-entretido-joga-videogame-no-celular-usa-roupas-casuais-sorri-positivamente-e-usa-fones-de-ouvido-no-pescoco_273609-32963.jpg?w=996&t=st=1656480224~exp=1656480824~hmac=e831aa953b2f01baeca94032abd7237ef6e127c721f0e092b83a7f81f7e5e8f9");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0px -164px;


}
</style>