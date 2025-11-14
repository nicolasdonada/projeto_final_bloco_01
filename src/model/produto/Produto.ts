export abstract class Produto {
    private _nome: string;
    private _valor: number;

    constructor(nome: string, valor: number){
        this._nome = nome;
        this._valor = valor;
    }

    public get nome(){
        return this._nome;
    }

    public get valor(){
        return this._valor;
    }

    public set valor(valor: number){
        this._valor = valor;
    }
}