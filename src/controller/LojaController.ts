import { Loja } from "../model/Loja";
import { Celular } from "../model/produto/Celular";
import { Notebook } from "../model/produto/Notebook";
import { Produto } from "../model/produto/Produto";
import { LojaRepository } from "../repository/LojaRepository";

export class LojaController implements LojaRepository {

    cadastrarNotebook(nome: string, valor: number, loja: Loja): void {
        loja.adicionarProduto(new Notebook(nome, valor));
    }

    cadastrarCelular(nome: string, valor: number, loja: Loja): void {
        loja.adicionarProduto(new Celular(nome, valor));
    }       

    listarProdutos(loja: Loja): void {
        loja.visualizarProdutos(loja);
    }

    buscarProduto(nome: string, loja: Loja): Produto | undefined{
        return loja.getProdutos.find(p => p.nome === nome);
    }

    atualizarProduto(nome: string, valor:number, loja: Loja): void {
        try {
            const sucesso = loja.atualizarProduto(nome, valor);

            if (sucesso) {
                console.log(`Produto "${nome}" atualizado para R$ ${valor}.`);
            } else {
                console.log(`Produto "${nome}" não encontrado.`);
            }

        } catch (erro) {
            console.error("Erro ao atualizar produto:", erro);
        }
    }  

    excluirProduto(nome: string, loja: Loja): void {
        try {
            const sucesso = loja.excluirProduto(nome);

            if (sucesso) {
                console.log(`Produto "${nome}" removido com sucesso.`);
            } else {
                console.log(`Produto "${nome}" não encontrado.`);
            }

        } catch (erro) {
            console.error("Erro ao excluir produto:", erro);
        }
    }

}