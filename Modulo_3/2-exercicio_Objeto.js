//#region Atividade objetos
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

//#endregion

//#region Atividade extra

/*
    estoque = [
        [1,"Volante",10,"Prateleira 01"],
        [2,"Pedal",5,"Prateleira 02"],
        [3,"Câmbio",50,"Prateleira 03"],
        [4,"Calota",100,"Prateleira 02"],
]


*/
// ==========================================
// TRANSFORMANDO EM ARRAY DE OBJETO
// ==========================================
const estoque = [
    {
    id: 1,
    nome: "Volante",
    quantidade: 10,
    localização: "Pratileira 1"
    },
    {
    id: 2,
    nome: "Pedal",
    quantidade: 5,
    localização: "Prateleira 02"
    },
    {
    id: 3,
    nome: "Câmbio",
    quantidade: 50,
    localização: "Prateleira 03"
    },
    {
    id: 4,
    nome: "Calota",
    quantidade: 100,
    localização: "Prateleira 02"
    }
]
// ==========================================
// TRANSFORMANDO EM OBJETO DE OBJETOS
// ==========================================


// ==========================================
// CADASTRAR PRODUTO
// ==========================================


function cadastrarProduto(nome,quantidade,localização) {
const novoProduto = {
    id: estoque.length + 1,
    nome: nome,
    quantidade: quantidade,
    localização: localização
};
estoque.push(novoProduto)
console.log("Cadastro realizado com sucesso!");


}


// ==========================================
// LISTAR ESTOQUE
// ==========================================


function listarEstoque() {  
    for(const produte of estoque){
        console.log(
            `ID: ${produte.id} `+
            `Nome: ${produte.nome} `+
            `Quantidade: ${produte.quantidade} `+
            `Localização: ${produte.localização} `
        )


    }
}


// ==========================================
// BUSCAR PRODUTO
// ==========================================


function buscarProduto(IdeBuscado) {  
    for(const produto of estoque){
        if(produto.id === IdeBuscado){
        console.log("Produto encontrado: ");
        console.log(
            `ID: ${produto.id} `+
            `Nome: ${produto.nome} `+
            `Quantidade: ${produto.quantidade} `+
            `Localização: ${produto.localização} `)
            return produto
        }
    }
    console.log("Nenhum produto encontrado");
       
}



// ==========================================
// ATUALIZAR QUANTIDADE
// ==========================================


function atualizarQuantidade(idbuscado, novaquantidade) {
    for(const produto of estoque){
        if(produto.id === idbuscado){
        produto.quantidade = novaquantidade
        console.log(`O produto ${produto.nome} teve sua quantida alterada para ${produto.quantidade}`);
        return produto
        }
    }
    console.log("Nenhum produto encontrado");
       
}


// ==========================================
// DELETAR PRODUTO
// ==========================================


function deletarProduto(){


}


// ==========================================
// TESTANDO O SISTEMA
// ==========================================


console.log("Cadastrando produto ------------------------")
cadastrarProduto("Motor",3,"Pratileira 1");

console.log("listando produto ------------------------")
listarEstoque()

console.log("buscando produto ------------------------")
buscarProduto(1)

console.log("buscando produto ------------------------")
atualizarQuantidade(1,30)

//#endregion