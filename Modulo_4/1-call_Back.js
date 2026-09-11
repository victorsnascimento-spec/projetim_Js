//#region funções basicas

console.log("1");
console.log("2");
console.log("3");

//Sincrono

console.log("início");

setTimeout(() => {
    console.log("Processamento terminou");
}, 2000);

console.log("fim");

numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numeros.forEach((numero) => {
    console.log(numero);
});

function processarUser(nome, callback) {
    console.log("Processando" + nome);
    callback();
}

processarUser("Rihanna ", () => {
    console.log("Usuário processado");
});

function buscarUser(callback) {
    //simula tempo
    setTimeout(() => {
        const user = {
            id: 1,
            nome: "Cirulli"
        };
        callback(user);
    }, 2000);
}

console.log("inicio da chamada");

buscarUser((user) => {
    console.log(user)
});

console.log("Fim da chamada");

//#endregion
