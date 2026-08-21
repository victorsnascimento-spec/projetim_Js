//#region Condicionais atividade 1

const idade = 18;

if (idade >= 18){
    console.log("Maior idade");
}

else {
    console.log("Menor idade");
}

//#endregion

//#region Condicionais atividade 2
const nota = 7.5;

switch(true){
    case (nota >= 7):
        console.log("Aprovado");
        break;

    case (nota <7 && nota > 4):
        console.log("Recuperação");
        break;

    case (nota < 5):
        console.log("Reprovado");
        break;
}


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

//#region Condicionais atividade 3
const senha = "Meben10";
const email = "ben10original@gmai.com";

if (senha ==="Meben10" && email === "ben10original@gmai.com"){
    console.log("Pode entrar!");
}
else {
    console.log("Some daqui meu!");
}

//#endregion

//#region Condicionais atividade 4
const statusPerdidos = "pendente";

switch(statusPerdidos){
    case "pendente":
        console.log("Pedido pendente");
        break;

    case "pago":
        console.log("Pedido pago");
        break;
    
    case "envidado":
        console.log("Pedido envidado");
        break;

    case "processando":
        console.log("Pedido processando");
        break;

    case "entregue":
        console.log("Pedido entregue");
        break;

    case "concluído":
        console.log("Pedido concluído");
        break;
    default:
        console.log("Pedido não encontardo");

}

//#endregion

//#region Condicionais atividade 5

for(let i = 0; i <= 100; i ++){
    if(i % 2 === 0){
    console.log(i);}
}

//#endregion

//#region Condicionais atividade 6
let contador = 1;
while (contador <= 100) {
    if (contador % 2 === 0) {
        console.log(contador);
    }
    contador++;
}
 
const lista1a100 = [];
for (let i = 1; i <= 100; i++) { lista1a100.push(i); }
 
for (const num of lista1a100) {
    if (num % 2 === 0) {
        console.log(num);
    }
}

//#endregion

//#region Condicionais atividade 7
const alunos = ["Helena", "Alice", "Cecília", "Maitê", "Laura", "Miguel", "Gael", "Ravi", "Théo", "Heitor"];

for(const aluno of  alunos){
    console.log(aluno);
    }

//#endregion

//#region Condicionais atividade 8

for(const lista of alunos){
    if(lista.length > 5){
    console.log(lista);}
}

//#endregion

//#region Condicionais atividade 9
const numeros = [10, 20, 30, 40, 50];
let resultado = 0;

for (let i = 0; i < numeros.length; i++) {
    resultado += numeros[i];
}
    console.log(resultado);

//#endregion

//#region Condicionais atividade 10
const pedidos = [
    { cliente: "Ana", valor: 150, pago: true },
    { cliente: "Carlos", valor: 300, pago: false },
    { cliente: "Maria", valor: 500, pago: true },
    { cliente: "João", valor: 200, pago: true },
    { cliente: "Luizinho", valor: 100, pago: true },
    { cliente: "Mel", valor: 243, pago: true },
    { cliente: "ND da VA", valor: 2400, pago: false },
    { cliente: "Ana", valor: 5400, pago: false },
    { cliente: "Lebron ", valor: 1200, pago: true }
]

for(let i = 0; i < pedidos.length; i ++){
    if(pedidos[i].pago === true){
    console.log(pedidos[i])}
}

//com for...of

for(let pedido of pedidos){
    if(pedido.pago === true){
        console.log(pedido);
    }
}


//#endregion