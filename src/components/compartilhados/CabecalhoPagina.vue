<template>
    <header class="cabecalho">
        <div class="cabecalho_pesquisaECarrinho">
            <img class="cabecalho_pesquisaECarrinho_logo" src="../../assets/logo.9cec7572.png" alt="logo Yampi">
            <BarraPesquisa />
            <button class="cabecalho_pesquisaECarrinho_botaoCarrinho">
                <font-awesome-icon class="pesquisaECarrinho_botaoCarrinho_icone" icon="fa-solid fa-cart-shopping" />
            </button>
        </div>
        <nav class="cabecalho_abasCategorias">
            <a href="#" class="cabecalho_abasCategorias_aba" v-for="categoria in listaCategorias"
                v-bind:key="categoria">
                {{ categoria }}
            </a>

        </nav>


    </header>
</template>

<script>
import BarraPesquisa from "./BarraPesquisa.vue";

export default {
    name: 'CabecalhoPagina',

    components: {
        BarraPesquisa
    },

    data() {
        return {
            listaCategorias: ["eletronics", "jewlery", "men's clothing", "women's clothing"]
        }
    },

    methods: {

    }
}
</script>

<style lang="scss">
@import '../../estilos/variaveis.scss';

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
        }

        .cabecalho_pesquisaECarrinho_botaoCarrinho {
            width: 15%;
            height: 55px;
            background-color: rgba($color: $cor-botao-secundario, $alpha: 0.3);
            border: none;
            border-radius: 12px;
            box-shadow: 2px 6px 8px $cor-sombra-projetada;

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
            color: $cor-texto;


        }

    }

}
</style>