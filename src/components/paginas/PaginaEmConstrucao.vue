<template>
    <CabecalhoPagina />

    <section class="pagina_construcao">
        <img class="pagina_construcao_imagem" src="../../assets/imagens/ilustracao.png" alt="">
        <div class="pagina_construcao_texto">
            <h1 class="pagina_construcao_titulo">Página em construção</h1>
            <p class="pagina_construcao_mensagem">Estamos construindo algo incrível aqui! <br> Volte em breve para conferir.</p>
        </div>
            
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
@import '../../estilos/variaveis.scss';

.pagina_construcao {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 0px;

    .pagina_construcao_texto {

        .pagina_construcao_titulo {
            font-size: $texto-grande;
            color: $cor-texto-destaque;
            text-transform: uppercase;
        }

        .pagina_construcao_mensagem {
            font-size: $texto-medio;
        }
    }

    .pagina_construcao_imagem {
        width: 30%;
    }
}
</style>