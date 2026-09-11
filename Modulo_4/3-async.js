buscarUser().then(user => {
    console.log(user);
});

//essa função é assincrona

async function buscafuserAsync() {

    try {
        //ideal 
        const user = await buscarUser();
        console.log(user);
    }
    catch (erro){
        //erro
        console.log(erro);
    }


}