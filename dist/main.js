"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Produto_1 = require("./model/Produto");
const CarinhoDeCompras_1 = require("./model/CarinhoDeCompras");
const produto1 = new Produto_1.Produto(`Lasanha`, 10.99);
const produto2 = new Produto_1.Produto(`Trakinas`, 3.99);
const produto3 = new Produto_1.Produto(`Coca-Cola`, 11.99);
const produto4 = new Produto_1.Produto(`Diamante Negro`, 7.49);
const produto5 = new Produto_1.Produto(`Mentos`, 4.15);
const carinhoDeCompras = new CarinhoDeCompras_1.CarrinhoDeCompra();
carinhoDeCompras.inserirProdutos(produto1, produto2, produto3, produto4, produto5);
console.log(`Quantidade de itens no carrinho: ${carinhoDeCompras.quantidadeProdutos()}`);
console.log(`Valor Total: ${carinhoDeCompras.valorTotal()}`);
//# sourceMappingURL=main.js.map