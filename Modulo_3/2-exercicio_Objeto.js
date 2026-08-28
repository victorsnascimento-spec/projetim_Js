//Atividade objetos
//-------------------------Atividade 1-------------------------


const aluno = {
    nome: "Carlos",
    idade: 22,
    curso: "Análise e Desenvolvimento de Sistemas",

    endereco: {
        cidade: "São José dos Campos",
        estado: "SP"
    },

    ativo: true,

    apresentar() {
        console.log(`Aluno: ${this.nome}, ${this.idade}, ${this.curso}, ${this.endereco.cidade}, ${this.endereco.estado}`);
    }
};

aluno.apresentar()

aluno.endereco.cidade = "Santa Rita do Passa Quatro"

aluno.email = "ben10original@gmail.com";

const {nome, idade, curso} = aluno;
console.log(nome);

const alunoAtualizado = {
    ...aluno
};

console.log(alunoAtualizado);

const json = JSON.stringify(aluno);
console.log(json);

const objeto = JSON.parse(json);
console.log(objeto);

//-------------------------Atividade 2-------------------------

const usuario = {
    id: 1,
    nome: "Claudia Raia",
    email: "claudia@email.com",
    idade: 25,
    endereco: {
        cidade: "São Paulo",
        estado: "SP",
        numero: 145
    }
};

console.log(usuario);

console.log("O nome do usuario é "+ usuario.nome);

console.log("A cidade do usuario é "+ usuario.endereco.cidade);

usuario.idade = 26;

usuario.telefone = "(19)12345-6789";

delete usuario.email;

const usuarioCopia = {
    ...usuario
};

console.log(`Nome: ${usuario.nome}, Cidade ${usuario.endereco.cidade}`);

const json2 = JSON.stringify(usuario);

console.log(json2);


const objeto2 = JSON.parse(json2);

console.log(usuarioCopia);
console.log(objeto2);