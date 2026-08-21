//#region exercicio 1
function saudacao(nome){
    console.log("Olá " + nome)
}
saudacao("maria")
//#endregion

//#region exercicio 2
function adicao(numero1, numero2){
    return numero1 + numero2;
}
function subtracao(numero1, numero2){
    return numero1 - numero2;
}
function multiplicacao(numero1, numero2){
    return numero1 * numero2;
}
function divisao(numero1, numero2){
    return numero1 / numero2;
}
console.log("o resultado é : " + adicao(1, 2));
console.log("o resultado é : " + subtracao(1, 2));
console.log("o resultado é : " + multiplicacao(1, 2));
console.log("o resultado é : " +divisao(1, 2));
//#endregion

//#region exercicio 3
function verificadorDeMLK(idade){
    if (idade < 18){
        console.log("Voçê é muleke!")

    }else console.log("Voçê não é muleke!")
}

verificadorDeMLK(16)
//#endregion

//#region exercicio 4
const calcularDobro = (numero) => {
     return numero * 2;
}

console.log(calcularDobro(1,9999999999999999))
//#end region