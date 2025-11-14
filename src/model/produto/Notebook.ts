import { Produto } from "./Produto";

export class Notebook extends Produto{
    constructor(nome: string, valor: number){
        super(nome, valor);
    }
}