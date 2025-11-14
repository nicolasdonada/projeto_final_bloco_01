export class ValorInvalidoError extends Error {
    constructor() {
        super("Valor do produto deve ser maior que zero.");
        this.name = "ValorInvalidoError";
    }
}