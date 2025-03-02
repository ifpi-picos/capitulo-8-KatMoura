const usuarios = []


export function add_usuario() {
    const nome = prompt('Digite o nome de usuário: ')
    const idade = parseInt(prompt('Digite a idade do usuário: '))
    const email = prompt('Digite o email do usuário: ')
    const lista = {nome, idade, email}

    usuarios.push(lista)
    console.log('Usuário adicionado com sucesso!')
}

export function remover_usuario() {
    const nome = prompt('Digite o nome do usuário que deseja remover: ')
    const index = usuarios.findIndex(user => user.nome === nome)
    usuarios.splice(index, 1)
    console.log('Usuário removido com sucesso!')
}

export function atualizar_usuario() {
    const nome = prompt('Digite o nome do usuário que deseja atualizar: ')
    const index = usuarios.findIndex(user => user.nome === nome)
    const opcao = prompt('Digite qual opção você deseja atualizar (nome, email ou senha): ')

    switch (opcao) {
        case 'nome':
            const nome = prompt('Digite o novo nome do usuário: ')
            usuarios[index].nome = nome
            break
    }
    usuarios[index] = {nome, idade, email}
    console.log('Usuário atualizado com sucesso!')
}