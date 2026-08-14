//#region Condicionais simples
const idade = 16;

if (idade >= 18){
    console.log("Maior idade");
}

else {
    console.log("Menor idade");
}

//#endregion

//#region Condicionais testeP

const nota = 4.99;

if (nota <= 4) {
    console.log("Reprovado");
}
else if (nota< 7 && nota >= 5 ) {
    console.log("Recuperação");
}
else {
    console.log("Aprovado")
}

//#endregion

//#region Condicionais composto

const senha = 20;
const email = "ddddddd@gmai.com";
const ativo = true;

if (senha ===18 && email === "ddddddd@gmai.com" && ativo){
    console.log("Usuário autorizado");
}
else {
    console.log("Some daqui meu");
}

//#endregion

//#region Condicionais switch case
const dia = 8

switch(dia){
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-feira");
        break;
    case 3:
        console.log("Terça-feira");
        break;
    case 4:
        console.log("Quarta-feira");
        break;
    case 5:
        console.log("Quinta-feira");
        break;
    case 6:
        console.log("Sexta-feira");
        break;
    case 7:
        console.log("Sabado");
        break;
    default:
        console.log("Dia não encontrado");

}

//#endregion

//#region Condicionais if/else
const idade1 = 20;

const mensagm = idade >=18 ? "Maior" : "Menor";

console.log(mensagm);

//#endregion

//#region Condicionais while
let contador = 1;

while(contador <= 100){
    console.log(contador);

    contador++;
}

//#endregion

//#region Condicionais for

for(let i = 1; i <= 5; i ++){
    console.log(i);
}

//for..of
const frutas = ["Morango", "Banana", "Maçâ", "Ameixa", "Uva"];

for(const fruta of frutas){
    console.log(fruta);
}

for(let i=0; i < frutas.length; i++){
    console.log(frutas[i]);
}

//#endregion
