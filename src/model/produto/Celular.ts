import { Produto } from "./Produto";

export class Celular extends Produto{
    constructor(nome: string, valor: number){
        super(nome, valor);
    }
}