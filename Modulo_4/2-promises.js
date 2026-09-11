const promessa = new Promise((resolva, reject) => {
    const sucesso = true;

    if (sucesso) {
        console.log("Tudo certo chefia!");
    }
    else {
        console.log("Deu errado patrão")
    }
});

//consumir a promisse

promessa.then((resolve) => {
    console.log(resolve);
})
    .catch((erro) => {
        console.log(erro)
    });
