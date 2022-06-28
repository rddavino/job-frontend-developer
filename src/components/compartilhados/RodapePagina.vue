<template>
    <div class="rodape">
        <div class="rodape_conteudo">
            <img class="rodape_conteudo_logo" src="../../assets/logo.9cec7572.png" alt="logo Yampi">

            <div class="rodape_conteudo_linksInstitucional">
                <p class="conteudo_linksInstitucional_titulo">Institucional</p>
                <ul class="conteudo_linksInstitucional_item">
                    <li><a href="#">Quem somos</a></li>
                    <li><a href="#">Política de privacidade</a></li>
                    <li><a href="#">Política de compra</a></li>
                    <li><a href="#">Política de troca e devolução</a></li>
                    <li><a href="#">Nossas lojas</a></li>
                </ul>
            </div>

            <div class="rodape_conteudo_linksAjuda">
                <p class="conteudo_linksAjuda_titulo">Ajuda</p>
                <ul class="conteudo_linksAjuda_item">
                    <li><a href="#">Fale conosco</a></li>
                    <li><a href="#">Perguntas frequentes</a></li>
                </ul>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'RodapePagina',
}
</script>

<style lang="scss">
@import '../../estilos/variaveis.scss';

.rodape {
    width: 100%;
    height: auto;
    background-color: $cor-background-caixa;
    display: flex;
    justify-content: space-between;
    padding: 40px 32px;
    position: relative;
    bottom: 0;
    top: 0;

    .rodape_conteudo {
        width: 67%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-around;

        .rodape_conteudo_logo {
            width: 240px;
        }

        .rodape_conteudo_linksInstitucional,
        .rodape_conteudo_linksAjuda {

            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;

            p {
                margin: 4px 0px;
            }

            .conteudo_linksInstitucional_item,
            .conteudo_linksAjuda_item {

                padding-left: 0;


                li {
                    list-style: none;
                    line-height: 28px;
                }


                a {
                    text-decoration: none;
                }
            }

        }
    }

}
</style>