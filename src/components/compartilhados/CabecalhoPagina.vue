<template>
    <header class="cabecalho">
        <div class="cabecalho_pesquisaECarrinho">
            <img 
                class="cabecalho_pesquisaECarrinho_logo" 
                src="../../assets/imagens/logo.9cec7572.png" 
                alt="logo Yampi"
                @click="redirecionarParaPaginaInicial()"                
            >
            <BarraPesquisa />
            <button 
                class="cabecalho_pesquisaECarrinho_botaoCarrinho"
                @click="redirecionarParaCarrinho()"

            >
                <font-awesome-icon class="pesquisaECarrinho_botaoCarrinho_icone" icon="fa-solid fa-cart-shopping" />
            </button>
        </div>
        <nav class="cabecalho_abasCategorias">
            <a href="#" 
                class="cabecalho_abasCategorias_aba" 
                v-for="categoria in listaCategorias"
                v-bind:key="categoria" 
                @click="redirecionarParaCategoria(categoria)"
            >
                {{ categoria }}

            </a>
        </nav>
    </header>
</template>

<script>
import BarraPesquisa from "./BarraPesquisa.vue";
import ServicoProduto from "../../services/ServicoProduto"

export default {
    name: 'CabecalhoPagina',

    components: {
        BarraPesquisa
    },

    data() {
        return {
            servicoProduto: new ServicoProduto,
            listaCategorias: [],
        }
    },

    async mounted() {
        this.listaCategorias = await this.servicoProduto.buscarCategorias();
    },

    methods: {
        redirecionarParaCategoria(categoria) {
            this.$router.push(`/category/${categoria}`);
        },

        redirecionarParaPaginaInicial() {
            this.$router.push(`/`);
        },

         redirecionarParaCarrinho() {
            this.$router.push(`/pagina-em-construcao`);
        }
    }
}
</script>

<style lang="scss">
@import '../../styles/variaveis.scss';

.cabecalho {
    width: 100%;
    height: 185px;
    border-bottom: 4px solid $cor-borda-caixa;
    background-color: $cor-background-caixa;

    .cabecalho_pesquisaECarrinho {
        max-width: 67%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .cabecalho_pesquisaECarrinho_logo {
            width: 180px;
            cursor: pointer;
        }

        .cabecalho_pesquisaECarrinho_botaoCarrinho {
            width: 15%;
            height: 55px;
            background-color: rgba($color: $cor-botao-secundario, $alpha: 0.3);
            border: none;
            border-radius: 12px;
            box-shadow: 2px 6px 8px $cor-sombra-projetada;
            cursor: pointer;

            .pesquisaECarrinho_botaoCarrinho_icone {
                font-size: 24px;
                color: $cor-icone;
            }

        }
    }

    .cabecalho_abasCategorias {
        max-width: 67%;
        margin: 0 auto;
        display: flex;
        align-items: baseline;
        justify-content: space-around;
        margin-top: 12px;

        :hover {
            background-color: $cor-aba;
        }

        .cabecalho_abasCategorias_aba {
            width: 25%;
            text-align: center;
            font-family: arial;
            padding: 20px 0px 16px 0px;
            border-radius: 16px 16px 0px 0px;
            text-decoration: none;
            font-size: 13px;
            font-weight: 700;
            letter-spacing: 1px;
            text-transform: uppercase;
            color: $cor-texto-corpo;


        }

    }

}
</style>