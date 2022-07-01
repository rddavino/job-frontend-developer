<template>
    <CabecalhoPagina />

    <section class="construcao">
            <img src="" alt="">
    </section>

    <RodapePagina />

</template>

<script>

import CabecalhoPagina from '../compartilhados/CabecalhoPagina.vue';
import RodapePagina from '../compartilhados/RodapePagina.vue';

export default {
    name: 'PaginaEmConstrucao',

    components: {
        CabecalhoPagina,
        RodapePagina,
    },
}
</script>

<style lang="scss">
.construcao {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>