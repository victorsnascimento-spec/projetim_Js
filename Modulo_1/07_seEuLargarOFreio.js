const temperatura = 380; 
const freioPressionado = true; 

const nivelPerigoso = temperatura >= 400 && freioPressionado == true;
const nivelIntenso = temperatura > 300 && freioPressionado == true;
const freioSeguro = temperatura < 400 && temperatura > 50;
const alertaPainel = temperatura < 400 && temperatura > 0;
const freiaInativo = (!(freioPressionado == true))


console.log(nivelPerigoso)
console.log(nivelIntenso)
console.log(freioSeguro)
console.log(alertaPainel)
console.log(freiaInativo)