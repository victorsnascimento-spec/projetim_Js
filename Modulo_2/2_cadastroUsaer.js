// Cadsstro de usuário

function cadastroUsuario(id, nome, senha, cpf, email){
    return{
        id,
        nome,
        senha,
        cpf,
        email
    };
}

const usuario = cadastroUsuario(1, "Victor", "AlunoVascaino#23", 123456789, "vascão@gmail.com");

console.log(usuario);

console.log("Oi " + usuario.nome + " seu cadastro foi realizado com sucesso!");