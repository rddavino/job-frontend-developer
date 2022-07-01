<template>

    <section class="vitrine">
        <div class="vitrine_cabecalho">
            <h1 class="vitrine_cabecalho_titulo">{{ tituloPagina }}</h1>
        </div>


        <div class="vitrine_produtos">
            <div class="vitrine_produtos_card" v-for="produto in listaProdutos" v-bind:key="produto">
                <div @click="redirecionarParaProduto(produto.id)">

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
        </div>

    </section>

</template>

<script>
import ServicoProduto from "../../services/ServicoProduto"

export default {
    name: 'VitrinePagina',

    props: {
        tituloPagina: String,
        categoria: String,
    },

    data() {
        return {
            servicoProduto: new ServicoProduto,
            listaProdutos: [],

        }
    },

    async mounted() {
        if (!this.categoria) {
            this.listaProdutos = await this.servicoProduto.buscarProdutos();
        } else {
            this.listaProdutos = await this.servicoProduto.buscarProdutosPorCategoria(this.categoria);
        }
    },

    methods: {
        redirecionarParaProduto(idProduto) {
            this.$router.push(`/produto/${idProduto}`);
        }
    }


}

</script>

<style lang="scss">
@import '../../estilos/variaveis.scss';


.vitrine {
    width: 67%;
    margin: 48px auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .vitrine_cabecalho {

        width: 100%;
        border-bottom: 4px solid $cor-borda-caixa;
        margin-bottom: 16px;

        .vitrine_cabecalho_titulo {
            font-size: $texto-grande;
            color: $cor-texto-titulo;
            text-transform: uppercase;
            text-align: center;
        }
    }

    .vitrine_produtos {

        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;

        .vitrine_produtos_card {
            height: 280px;
            min-width: 20%;
            max-width: 20%;
            padding: 24px;
            border-radius: 16px;
            margin-bottom: 16px;
            display: flex;
            justify-content: space-between;
            flex-direction: column;

            &:hover {
                cursor: pointer;
                box-shadow: 2px 6px 8px $cor-sombra-projetada;
            }

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
                justify-content: center;
                align-items: center;

                .card_detalhes_nomeProduto {
                    margin-bottom: 12px;
                    font-size: 13px;
                    height: 16px;
                    text-align: center;
                    overflow-y: hidden !important;
                }

                .card_detalhes_precoProduto {
                    margin: 0;
                    font-size: 20px;
                    max-width: 228px;
                    text-align: center;
                    color: $cor-texto-destaque;
                    font-weight: bold;
                }
            }
        }


    }

    @media screen and (max-width: 1000px) {

        .vitrine_produtos {

            justify-content: space-between;

            .vitrine_produtos_card {

                min-width: 40%;
                max-width: 40%;
            }
        }
    }

    @media screen and (max-width: 728px) {

        .vitrine_produtos {

            .vitrine_produtos_card {

                min-width: 35%;
                max-width: 35%;
            }
        }
    }

    @media screen and (max-width: 555px) {

        .vitrine_produtos {
            justify-content: center;

            .vitrine_produtos_card {

                min-width: 100%;
                max-width: 100%;
            }
        }
    }
}
</style>