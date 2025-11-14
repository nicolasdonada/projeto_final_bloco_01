import readlinesync = require("readline-sync");

export function main() {
    let opcao_cliente: number;

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

        opcao_cliente = readlinesync.questionInt("Entre com a opcao desejada: ");

        if(opcao_cliente == 7){
            console.log("Volte sempre!");

            return;
        }


        switch(opcao_cliente){
            case 1:
                console.log("Cadastrar notebook....");
                break;
            
            case 2:
                console.log("Cadastrar celular....");
                break;

            case 3:
                console.log("Listar produtos....");
                break;

            case 4:
                console.log("Buscar produto....");
                break;

            case 5:
                console.log("Atualizar produto....");
                break;

            case 6:
                console.log("Excluir produto....");
                break;

            
            default:
                console.log("Opção inválida!")
                break;
        }

    }
}

main();