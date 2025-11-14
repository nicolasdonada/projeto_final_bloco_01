import { Loja } from "../model/Loja";
import { Produto } from "../model/produto/Produto";

export interface LojaRepository {

    // CRUD
    cadastrarProduto(nome: string, valor: number): void;
    listarProdutos(): void;
    buscarProduto(nome: string): Produto;
    atualizarProduto(nome: string): void;
    excluirProduto(nome: string): void;
    
}