import { Produto } from "./model/Produto";
import { CarrinhoDeCompra } from "./model/CarinhoDeCompras";

const produto1 = new Produto(`Lasanha`, 10.99)
const produto2 = new Produto(`Trakinas`, 3.99)
const produto3 = new Produto(`Coca-Cola`, 11.99)
const produto4 = new Produto(`Diamante Negro`, 7.49)
const produto5 = new Produto(`Mentos`, 4.15)

const carinhoDeCompras = new CarrinhoDeCompra();
carinhoDeCompras.inserirProdutos(produto1, produto2, produto3, produto4, produto5);
console.log(`Quantidade de itens no carrinho: ${carinhoDeCompras.quantidadeProdutos()}`);
console.log(`Valor Total: ${carinhoDeCompras.valorTotal()}`);