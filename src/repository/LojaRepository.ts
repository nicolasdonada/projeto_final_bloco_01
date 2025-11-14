import { Loja } from "../model/Loja";
import { Produto } from "../model/produto/Produto";

export interface LojaRepository {

    // CRUD
    cadastrarNotebook(nome: string, valor: number, loja: Loja): void;
    cadastrarCelular(nome: string, valor: number, loja: Loja): void;
    listarProdutos(loja: Loja): void;
    buscarProduto(nome: string, loja: Loja): Produto | undefined;
    atualizarProduto(nome: string, valor: number, loja: Loja): void;
    excluirProduto(nome: string, loja: Loja): void;

}