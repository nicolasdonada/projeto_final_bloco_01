export class ProdutoNaoEncontradoError extends Error {
    constructor(nome: string) {
        super(`Produto "${nome}" não encontrado.`);
        this.name = "ProdutoNaoEncontradoError";
    }
}