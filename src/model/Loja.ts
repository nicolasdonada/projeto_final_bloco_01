import { LojaRepository } from "../repository/LojaRepository";
import { Produto } from "./produto/Produto";

export class Loja{

    private _nome: string;
    private _listaProdutos: Array<Produto> = [];

    constructor(nome: string){
        this._nome = nome;
    }

    public get getNome(){
        return this._nome;
    }

    public get getProdutos(){
        return this._listaProdutos;
    }

    public set setNome(nome: string){
        this._nome = nome;
    }

    adicionarProduto(produto: Produto){
        this._listaProdutos.push(produto);
    }

    visualizarProdutos(loja: Loja){
        for(let produto of loja.getProdutos){
            console.log(produto);
        }
    }

    atualizarProduto(nome: string, valor: number): boolean {
        const produto = this._listaProdutos.find(p => p.nome === nome);

        if (produto) {
            produto.valor = valor;
            return true;   
        }

        return false;  
    }

    excluirProduto(nome: string): boolean {
        const tamanhoAntes = this._listaProdutos.length;

        this._listaProdutos = this._listaProdutos.filter(p => p.nome !== nome);

        return this._listaProdutos.length < tamanhoAntes;
    }

}