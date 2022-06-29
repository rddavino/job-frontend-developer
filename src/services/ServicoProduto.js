import axios from "axios";


export default class ServicoProduto {
    async buscarCategorias() {
        const response = await axios.get(`https://fakestoreapi.com/products/categories`);
        
        return response.data;
    }

    async buscarProdutos() {
        const response = await axios.get(`https://fakestoreapi.com/products`);
        return response.data;
    }

    async buscarProdutoPorId(idProduto) {
        const response = await axios.get(`https://fakestoreapi.com/product/${idProduto}`);
        return response.data;
    }

    async buscarProdutosPorCategoria(categoria) {
        const response = await axios.get(`https://fakestoreapi.com/products/category/${categoria}`);
        return response.data;
    }

}



