import { add_usuario, remover_usuario, atualizar_usuario } from "./questão5";

const adicionar = parseInt(prompt("Deseja adicionar, remover ou atualizar as informações de um usuário (1, 2, 3): "))

switch (adicionar) {
    case 1:
        add_usuario()
        break
    case 2:
        remover_usuario()
        break
    case 3:
        atualizar_usuario()
        break
    default:
        console.log('Opção inválida!')
}

