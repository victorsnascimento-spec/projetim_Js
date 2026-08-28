/*
const nome = {} objeto
const arrayDeObjeto [{}, {}, {}] <-- Mais comum
const objetoDeObjeto {{}, {}, {}} <-- Possivel tb
*/
//#region objetos base
const aluno = {
    id: 1,
    nome: "Davi",
    idade: 17,
    curso: "Ensino Médio Integrado",
    RM: 22555,
    cadastroAtivo: true,
    email: null,
    hobbi: ["ler", "bola", "xadriz"],
    endereco: {
        rua: "Rua 35, 405",
        bairro: "Jardim Italia",
        cidade: "Santa Rita Do Passa Quatro",
        Estado: "São Paulo",
        pais: "Brasil",
        cep: 13000560
    }
};

console.log(aluno);

console.log(aluno.nome);

if(aluno.cadastroAtivo === true){
    console.log(aluno.nome + " Seja bem-vindo!")
}
else{
    console.log("Some daqui!")
}
console.log(aluno.endereco.rua);

//mudar

aluno.idade = 18;

console.log(aluno.idade);

aluno.cadastroAtivo = false;
aluno.endereco.bairro = "Lagoinha";

console.log(aluno.cadastroAtivo, aluno.endereco.bairro);

//Adicao

aluno.cpf = 987456321;
aluno.telefone = "(19)12345-6789";

console.log(aluno)

//deletar
delete aluno.curso;
console.log(aluno)
//#endregion

//#region objetos exercicios
const filme = {
    titulo: "Homem Aranha, um novo dia",
    ano: 2026,
    genero: "Heroi e ação",
    //parte extra da aula
    apresentar : function(){
        //this = isso
        console.log("Melhor "+ filme.titulo);
        console.log(`Melhor ${this.titulo}`);
    }
};

console.log(filme.titulo);

filme.ano = 2027;

filme.diretor = "jorginho";

delete filme.genero;

console.log(filme);

//extra
filme.apresentar()

//#endregion

//#region objeto desestruturação

const {nome, idade, RM} = aluno;

console.log(nome);

const {nome: nomeCompleto} = aluno;
console.log(nomeCompleto);

//#endregion

//#region objeto spread

const dadosFamilia = {
    nomeMae: "Luana",
    nomePai: "Victor"
};

const usuario = {
    ...aluno,
    ...dadosFamilia,
    dataCadastro: "28/08/26"
};

console.log(usuario);

//#endregion

//#region objeto exercicio 2

const dadosPessoais = {
    nome: 'Guilherme',
    matricula: ' 20260828',
    curso: 'Análise e Desenvolvimento de Sistemas'
};

const dadosContato = {
    email: 'guilherme@email.com',
    telefone: "(11) 12345-6789"
};

const perfilCompleto = {
    ...dadosContato,
    ...dadosPessoais
};
console.log(perfilCompleto);

const perfilAtualizado = {
    ...dadosPessoais
};

perfilAtualizado.curso = "Engenharia de Software";
 
perfilAtualizado.status = "Matricula";

console.log(perfilAtualizado)

//#endregion

//#region objeto.keys, .values, .entries
//mostra as chaves do objeti
console.log(Object.keys(aluno));
//mostra os valores
console.log(Object.values(aluno));
//relaciona keys e values
console.log(Object.entries(aluno));

//#endregion

//#region objeto x JSON
//convercao para json
const json = JSON.stringify(aluno);

console.log(json);
//convercao para objeto
const objeto = JSON.parse(json);
console.log(objeto);

//#endregion