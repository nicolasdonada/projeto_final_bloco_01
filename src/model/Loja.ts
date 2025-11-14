export class Loja{

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