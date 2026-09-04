//#region arrray frutas

const frutas = ["abacaxi", "banana", "maçã", "morango", "uva", "laranja"];
console.log(frutas);


console.log(frutas[5]);

console.log(frutas.length);

console.log(frutas[frutas.length - 1]);

frutas[1] = "pera";
console.log(frutas);

frutas.push("morango");
console.log(frutas);

frutas.unshift("manga");
console.log(frutas);

frutas.pop();
console.log(frutas);

frutas.shift()
console.log(frutas);

const itemRemovido = frutas.pop;
console.log(itemRemovido);

//#endregion

//#region variações do for

for (const fruta of frutas){
    console.log(fruta);
}

frutas.forEach((fruta) => {
    console.log(fruta);
});

frutas.forEach((fruta) => {
    const nomrFrutaM = 
        fruta.charAt(0).toUpperCase() + fruta.slice(1);
    console.log(nomrFrutaM)
});

const numeros = [1, 2, 3, 4, 5, 6];

const numerosDobrados = numeros.map((numero) => {
    return numero * 2;
});

console.log(numerosDobrados);

const numerosDivididos = numeros.map((numero) => {
    return numero / 2;
});

console.log(numerosDivididos);

const maioresque3 = numeros.filter((numero) => {
    return numero > 3;
});

console.log(maioresque3);

const numerof = numeros.find((n) => n > 4);
console.log(numerof);

const existeMaiorQue5 = numeros.some(n => n > 5);
console.log(existeMaiorQue5);

const todosMQ0 = numeros.every(n => n > 0);
console.log(todosMQ0);

const soma = numeros.reduce((total, numero) => {
    return total + numero;
}, 0);
console.log(soma);

//#endregion

//#region exercicios

const produtos = [
    {nome: "Produto1", disponivel: true},
    {nome: "Produto2", disponivel: false},
    {nome: "Produto3", disponivel: true},
    {nome: "Produto4", disponivel: true}
]

const produtosDisponiveis = [];

for(const produto of produtos) {
    if (produto.disponivel) {
        produtosDisponiveis.push(produto.nome);
    }
}
console.log(produtosDisponiveis);

const produtoDisponivel = produtos
    .filter((produto) => produto.disponivel) //comparcao nessesaria somente para false
    .map((produto) => produto.nome);

console.log(produtoDisponivel);
//#endregion