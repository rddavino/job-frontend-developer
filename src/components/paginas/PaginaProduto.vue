<template>
    <CabecalhoPagina />

    <section class="produto">
        <div class="produto_cabecalho">
            <h1 class="produto_cabecalho_titulo">{{ this.produto.title }}</h1>
        </div>

        <div class="produto_detalhes">
            <div class="produto_detalhes_areaImagem">
                <img class="detalhes_areaImagem_img" :src="this.produto.image" :alt="this.produto.description">
            </div>
            <div class="produto_detalhes_infos">
                <div class="detalhes_infos_descricao">
                    <p>
                        {{ this.produto.description }}
                    </p>
                </div>

                <div class="detalhes_infos_quantidadeValor">
                    <div class="infos_quantidadeValor_contador">
                        contador
                    </div>
                    <div class="infos_quantidadeValor_preco">
                        R$ {{ this.produto.price }}
                    </div>
                    <button class="infos_quantidadeValor_botao">
                        <span class="quantidadeValor_botao_label">
                            Comprar
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </section>

    <VitrinePagina :tituloPagina=tituloPagina :categoria="categoria" />
    <RodapePagina />
</template>

<script>
import ServicoProduto from "../../services/ServicoProduto"
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
            servicoProduto: new ServicoProduto,
            produto: {
                id: Number,
                title: String,
                price: String,
                category: String,
                description: String,
                image: String
            },
            tituloPagina: "Produtos relacionados",
            categoria: `true`,
            idProduto: this.$route.params.id,
        }
    },

    async mounted() {
        this.produto = await this.servicoProduto.buscarProdutoPorId(this.idProduto);
    },

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
            font-size: $texto-medio;
            color: $cor-texto-titulo;
            text-transform: uppercase;
            text-align: left;
        }

    }

    .produto_detalhes {
        display: flex;
        height: auto;
        margin-bottom: 30px;

        .produto_detalhes_areaImagem {
            width: 67%;
            height: 260px;
            margin: 0 auto;
            padding-right: 20px;
            display: flex;
            justify-content: center;
            align-items: center;

            .detalhes_areaImagem_img {
                width: 25%;
            }
        }

        .produto_detalhes_infos {
            width: 40%;


            .detalhes_infos_descricao {
                max-width: 100%;
                font-size: $texto-pequeno;
                color: $cor-texto-corpo;
                line-height: 20px;
                margin: 40px 0px;

            }

            .detalhes_infos_quantidadeValor {
                max-width: 100%;
                height: auto;
                padding: 20px;
                border-radius: 20px;
                background-color: $cor-background-caixa;

                .infos_quantidadeValor_contador {
                    text-align: right;
                }

                .infos_quantidadeValor_preco {
                    text-align: right;
                    color: $cor-texto-destaque;
                    font-size: $texto-medio;
                    font-weight: 600;
                    margin-bottom: 30px;
                    padding: 20px;
                }

                .infos_quantidadeValor_botao {
                    width: 100%;
                    background-color: $cor-botao-principal;
                    border-radius: 8px;
                    border: none;
                    padding: 12px 16px;

                    .quantidadeValor_botao_label {
                        color: $cor-texto-botao-principal;
                        font-size: $texto-medio;
                        text-transform: uppercase;
                        font-weight: 500;

                    }
                }

            }
        }

    }
}
</style>