//#region -  Manipulação básica

const frutas = ["Maçã", "Banana", "Laranja", "Pera", "Limão", "Mexiriaca"];

/*
    Adicione "Morango" no final.
    Adicione "Abacaxi" no início.
    Remova o último elemento.
    Remova o primeiro elemento.
    Mostre a quantidade de frutas.
*/

frutas.push("Morango");
console.log(frutas);

frutas.unshift("Abacaxi");
console.log(frutas);

frutas.pop();
console.log(frutas);

frutas.shift()
console.log(frutas);

console.log(frutas.length);
// ou 
console.log(frutas[frutas.length - 1]);


//#endregion

//#region - forEach

const nomes = [
    "Ana",
    "Carlos",
    "João",
    "Maria", 
    "Claudia", 
    "Adriana",
    "Cesar",
    "Asafe"
];
//Utilize forEach para mostrar: Olá, Ana! .... .assim por diante 

nomes.forEach((nome) => {
    const oiNomes = 
        "Olá, " + nome + "!"
    console.log(oiNomes);
});

//#endregion

//#region map

const precos = [10, 20, 30, 40, 50, 60, 70, 80];

//Crie um novo array com os preços acrescidos de 10%.

const preco10 = precos.map((preco) => {
    return preco + (preco * 0.1);
});

console.log(preco10);


//#endregion

//#region filter
const numeros = [5, 12, 18, 25, 30, 7, 40];

//Crie um novo array somente com números maiores que 20.

const maioresQ20 = numeros.filter((numero) => {
    return numero > 20;
});

console.log(maioresQ20)

//#endregion

//#region find
const listaNumeros = [5, 12, 18, 25, 30];

const umNumMaiQ20 = numeros.find((n) => n > 20);
console.log(umNumMaiQ20);

//Encontre o primeiro número maior que 20.
//#endregion

//#region some
const idades = [12, 15, 17, 20, 14];

//Existe alguém maior de idade? Utilize o some para encontrar! 

const maiorIdade = idades.some(n => n > 18);
console.log(maiorIdade);

//every

//Usando o array acimima codifique respondendo: Todos são maiores de idade?

const todosMQ18 = idades.every(n => n > 18);
console.log(todosMQ18);

//#endregion

//#region reduce

const valores = [100, 200, 50, 150];

//Calcule o valor total.

const somaValores = valores.reduce((total, valor) => {
    return total + valor;
}, 0);
console.log(somaValores);

//#endregion