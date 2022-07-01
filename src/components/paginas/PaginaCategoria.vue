<template>
    <CabecalhoPagina />
    <VitrinePagina :tituloPagina="categoria" :categoria="categoria" />
    <RodapePagina />

</template>

<script>
import CabecalhoPagina from '../compartilhados/CabecalhoPagina.vue';
import RodapePagina from '../compartilhados/RodapePagina.vue';
import VitrinePagina from '../compartilhados/VitrinePagina.vue';

export default {
    name: 'PaginaCategoria',

    components: {
        CabecalhoPagina,
        RodapePagina,
        VitrinePagina,
    },

    data() {
        return {
            categoria: this.$route.params.id,
            tituloPagina: this.categoria,
        }
    }
}

</script>