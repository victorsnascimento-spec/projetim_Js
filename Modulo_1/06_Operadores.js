//#region Operação simples
const idade = 20;

console.log(idade >= 18);

console.log("--------------------------------------------------------");

//#endregion

//#region Operação matematicos

const a = 8;
const b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

console.log("--------------------------------------------------------");

//#endregion

//#region Operação de comparação

const a1 = 10;
const b1 = '10';

console.log(a1 < b1);
console.log(a1 > b1);
console.log(a1 <= b1);
console.log(a1 >= b1);
console.log(a1 == b1); // compara se os caracteres sao iguais
console.log(a1 === b1); // compara o caracter e o tipo
console.log(a1 !== b1);

console.log("--------------------------------------------------------");

//#endregion

//#region Exercicios operação 1

const idade1 = 20;
const idade2 = 25;

console.log(idade1 === idade2);
console.log(idade1 == idade2);
console.log(idade1 !== idade2);
console.log(idade1 <= idade2);
console.log(idade1 >= idade2);
console.log(idade1 < idade2);
console.log(idade1 > idade2);
console.log(idade2 >= 21);
console.log(idade1 >= 21);
console.log(idade1 + idade2 == 45);
console.log(idade1 + idade2 == '45');
console.log(idade1 + idade2 === '45');
console.log(idade1 / idade2 == 0.8);
console.log(idade1 * idade2 == 500);

console.log("--------------------------------------------------------");

//#endregion

//#region Operação logica

const idade3 = 17;
const idade4 = 30;

console.log(idade3 > 18 && idade4 > 18); //todos devem ser true
console.log(idade3 > 18 || idade4 > 18); //um precisa ser true
console.log(!(idade3 < 18 )); //negar algo
console.log(!(idade4 < 18));

console.log("--------------------------------------------------------");

//#endregion

//#region Operação combinando

const idade5 = 25;
const matriculaAtiva = true;

const podeComprar = idade >= 18 && matriculaAtiva;

console.log(podeComprar)

console.log("--------------------------------------------------------");

//#endregion

//#region Operação de incremento e decremento
let numero = 10;
console.log(numero++);
console.log(numero);
console.log(++numero);

console.log(numero--);
console.log(numero);
console.log(--numero);

console.log("--------------------------------------------------------");

//#endregion

//#region Operação Exercicios 2

const x = 5;
const y = 10;
const resultado = x < y;

console.log(x > 6 && y > 6);
console.log(x > 6 || y > 6); 
console.log(!(y < 6 ));


console.log(resultado);
console.log(y == "10");
console.log(y === "10");
console.log(true == 1);
console.log(true === 1);
console.log(null == undefined);
console.log(null === undefined);

console.log("--------------------------------------------------------");

//#endregion

//#region Operação desafio

const dataNascimento = new Date("2010-06-11");
const ativo = true;
const dezoitoAnosEmMilisegundos = 18 * 365.25 * 24 * 60 * 60 * 1000;

const podeAcessar = (new Date - dataNascimento) >= dezoitoAnosEmMilisegundos && ativo;

console.log(podeAcessar)

console.log("--------------------------------------------------------");

//#endregion