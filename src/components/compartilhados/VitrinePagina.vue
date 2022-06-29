<template>

    <section class="vitrine">
        <div class="vitrine_cabecalho">
            <h1 class="vitrine_cabecalho_titulo">{{ tituloPagina }}</h1>
        </div>

        <div class="vitrine_produtos">
            <div class="vitrine_produtos_card" v-for="produto in listaProdutos" v-bind:key="produto">
                <div class="produtos_card_imagem">
                    <img :src="produto.image" :alt="produto.description">
                </div>

                <div class="produtos_card_detalhes">
                    <p class="card_detalhes_nomeProduto">
                        {{ produto.title }}
                    </p>

                    <p class="card_detalhes_precoProduto">
                        R$ {{ produto.price }}
                    </p>
                </div>



            </div>

        </div>

    </section>


</template>

<script>
import ServicoProduto from "../../services/ServicoProduto"

export default {
    name: 'VitrinePagina',

    props: {
        tituloPagina: String
    },

    data() {
        return {
            servicoProduto: new ServicoProduto,
            listaProdutos: []
        }
    },

    async mounted() {
        this.listaProdutos = await this.servicoProduto.buscarProdutos();
    }


}

</script>

<style lang="scss">
@import '../../estilos/variaveis.scss';


.vitrine {
    width: 67%;
    margin: 48px auto;

    .vitrine_cabecalho {

        border-bottom: 4px solid $cor-borda-caixa;
        margin-bottom: 16px;

        .vitrine_cabecalho_titulo {
            font-size: $texto-titulo;
            color: $cor-texto;
            text-transform: uppercase;
            text-align: center;
        }
    }

    .vitrine_produtos {

        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-wrap: wrap;

        .vitrine_produtos_card {
            height: 300px;
            width: 20%;
            padding: 20px;
            border-radius: 16px;
            margin: 5px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            :last-child {
                margin-right: 0px;
            }

            .produtos_card_imagem {
                text-align: center;

                img {
                    width: 112px;
                }
            }

            .produtos_card_detalhes {

                display: flex;
                flex-direction: column;
                justify-content: flex-end;

                .card_detalhes_nomeProduto {

                    margin: 0;
                    font-size: 13px;
                    text-align: center;
                    max-width: 228px;
                    overflow-y: hidden;
                }

                .card_detalhes_precoProduto {
                    margin: 0;
                    font-size: 20px;
                    text-align: center;
                    max-width: 228px;
                }
            }

        }
    }
}
</style>