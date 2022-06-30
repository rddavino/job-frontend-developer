<template>
    <CabecalhoPagina />

    <section class="produto">
        <div class="produto_cabecalho">
            <h1 class="produto_cabecalho_titulo">nome do produto</h1>
        </div>

        <div class="produto_detalhes">
            <div class="produto_detalhes_imagem">
                <img src="" alt="">
            </div>
            <div class="produto_detalhes_infos">
                <div class="detalhes_infos_descricao">
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente ut optio dolores rem dicta sint vel debitis quidem, ex ullam nemo nisi iure. Tenetur delectus optio excepturi magni, fuga mollitia?
                    </p>
                    </div>

                <div class="detalhes_infos_quantidadeValor">
                    <div class="infos_quantidadeValor_contador">
                        contador
                    </div>
                    <div class="infos_quantidadeValor_preco">
                        valor
                    </div>
                    <button class="infos_quantidadeValor_botao">Comprar</button>
                </div>
            </div>
        </div>
    </section>

    <VitrinePagina :tituloPagina=tituloPagina :categoria=categoria />
    <RodapePagina />
</template>

<script>

import CabecalhoPagina from '../compartilhados/CabecalhoPagina.vue';
import RodapePagina from '../compartilhados/RodapePagina.vue';
import VitrinePagina from '../compartilhados/VitrinePagina.vue';

export default {
    name: 'PaginaProduto',

    components: {
        CabecalhoPagina,
        RodapePagina,
        VitrinePagina,
    },

    data() {
        return {
            tituloPagina: `Produtos Relacionados`,
            categoria: true
        }
    },

    methods: {
        obterIdProduto() {
            let query = location.search.slice(1);
            let partes = query.split('/');

            partes.forEach(function (parte) {
                console.log(parte)
            });

        }
    },

    mounted() {
        this.obterIdProduto();
    }
}
</script>

<style lang="scss">
@import '../../estilos/variaveis.scss';


.produto {

    width: 67%;
    margin: 48px auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .produto_cabecalho {

        width: 100%;
        border-bottom: 4px solid $cor-borda-caixa;
        margin-bottom: 16px;

        .produto_cabecalho_titulo {
            font-size: $texto-titulo;
            color: $cor-texto;
            text-transform: uppercase;
            text-align: center;
        }

        .produto_detalhes {

            .produto_detalhes_imagem {
                /* to do */
            }

            .produto_detalhes_infos {
                /* to do  */
            }
        }
    }
}
</style>