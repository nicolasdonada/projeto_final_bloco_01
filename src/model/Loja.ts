import { LojaRepository } from "../repository/LojaRepository";
import { Produto } from "./produto/Produto";

export class Loja implements LojaRepository{

    private _nome: string;
    private _listaProdutos: Produto;

    constructor(nome: string){
        this._nome = nome;
    }

    public get nome(){
        return this._nome;
    }

    public set nome(nome: string){
        this._nome = nome;
    }

}