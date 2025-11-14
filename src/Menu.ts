import readlinesync = require("readline-sync");
import { Loja } from "./model/Loja";
import { LojaController } from "./controller/LojaController";

export function main() {
    let opcaoCliente: number;

    let lojaNicolas: Loja = new Loja("Smartphones e Notebooks");
    let lojaController: LojaController = new LojaController();
    

    while(true){
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("          E-commerce Smartphones & Notebooks         ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Cadastrar notebook                   ");
        console.log("            2 - Cadastrar celular                    ");
        console.log("            3 - Listar todos produtos                ");
        console.log("            4 - Buscar produto                       ");
        console.log("            5 - Atualizar produto                    ");
        console.log("            6 - Excluir produto                      ");
        console.log("            7 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");

        opcaoCliente = readlinesync.questionInt("Entre com a opcao desejada: ");

        if(opcaoCliente == 7){
            console.log("Volte sempre!");

            return;
        }


        switch(opcaoCliente){
            case 1:
                let nomeNotebook: string = readlinesync.question("Digite o nome do notebook: ");
                let valorNotebook: number = readlinesync.questionFloat("Digite o valor do notebook: ");

                lojaController.cadastrarNotebook(nomeNotebook, valorNotebook, lojaNicolas);
                break;
            
            case 2:
                let nomeCelular: string = readlinesync.question("Digite o nome do notebook: ");
                let valorCelular: number = readlinesync.questionFloat("Digite o valor do notebook: ");

                lojaController.cadastrarCelular(nomeCelular, valorCelular, lojaNicolas);
                break;

            case 3:
                lojaController.listarProdutos(lojaNicolas);
                break;

            case 4:
                let nomePesquisar: string = readlinesync.question("Digite o nome do produto: ")

                console.log(lojaController.buscarProduto(nomePesquisar, lojaNicolas));
                break;

            case 5:
                let nomeAtualizar: string = readlinesync.question("Digite o nome do produto: ")
                let valorNovo: number = readlinesync.questionFloat("Digite o novo valor do produto: ") 

                lojaController.atualizarProduto(nomeAtualizar, valorNovo, lojaNicolas);
                break;

            case 6:
                let nomeExcluir: string = readlinesync.question("Digite o nome do produto para excluir: ");

                lojaController.excluirProduto(nomeExcluir, lojaNicolas);
                break;

            
            default:
                console.log("Opção inválida!")
                break;
        }

    }
}

main();