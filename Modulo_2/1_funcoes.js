//#region funcoes 

function quandoClicarNoBotao(){
    console.log("Mensagem do ADM: obrigado por comprar")
}

//chamamento funcional

quandoClicarNoBotao()

function mostrarMSG(){
    console.log("e bebam água");
}

mostrarMSG();

//Mais simples de tudo (parametros)

//#endregion

//#region funcoes parametros

//Mais simples de tudo (parametros)

function somar(){
    const resultado = 8 + 3;
    console.log(resultado);
}

somar()
// reutilizar

function somar(numero1, numero2){
    console.log (numero1 + numero2);
}


somar(8, 3);

somar(10,20);

somar(128, 256);
//#endregion

//#region funcoes return

function soma(numero3, numero4){
    return(numero3 + numero4);
}

const resultado = soma (8,3);

if(resultado >= 11){
    console.log("O Senai é massa");
}
else{
    console.log(" ainda é massa");
}
/* console.log()é como mostrar o resultado em uma tela.
    return é como entregar o resultado para outra parte do programa utilizar.
*/
const valor = 400;
const desconto = 20;
const valorFinal = calcularDesconto(valor, desconto);


//funcoes

function calcularDesconto(valor, desconto){
    return valor - desconto;

}

//calculo imposto

function calcularImposto(valorFinal){
    const valorImposto = valorFinal * 0.04

    console.log("Valor tributário : " + valorImposto);

}

// regra  cashBack

function calcularCashBack(valorFinal){
    if (valorFinal > 50){
    const cashBack = valorFinal * 0.10;
    console.log("Valor do CashBack: " + cashBack);

    }
}

//regra parcelamento

function parcelamento(valorFinal){
    if (valorFinal >= 399){
        const valorParcelado = valorFinal / 6;
        console.log("O preço a ser pago é;" + valorParcelado);

    } else if (valorFinal >= 100 && valorFinal < 399){
        const valorParcelado = (valorFinal * 1.02)/6 
        console.log("O preço a ser pago é;" + valorParcelado);

    }else{
        console.log("Para liso é a vista");
    }
}

parcelamento(valorFinal);
calcularImposto(valorFinal);
calcularCashBack(valorFinal);
//#endregion

//#region funcoes simples

function somando(numero5, numero6){
    return numero5 + numero6;
}

//Arrow funcion

const somanddo = (numero5, numero6) => {
    return numero5 + numero6;
}

console.log(somando(3, 8));
console.log(somanddo(8, 3))
//#endregion
