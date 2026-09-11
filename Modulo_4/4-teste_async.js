const esperar = (ms) => new Promise(
    resolve => setTimeout(
        resolve, ms
    ));

async function buscarUser(Id) {
    await esperar(2000);

    return {
        id: Id,
        nome: "CirulliDaMassa",
        email: "cirulaodofonao@gmail.com"
    }
}

async function buscarPerdido(userID) {
    await esperar(2222);

    const produtoDoBom = [
        { id: 1, produto: "X-Tudo" },
        { id: 2, produto: "Coca-Cola" },
        { id: 3, produto: "X-Bacon" }
    ];

    return produtoDoBom.filter(pedido =>pedido.id === userID);
}

//Função executar
async function executar(){
    try{
        console.log("Deu bom Patrão");
        console.log("Buscando User ...")
        const user = await buscarUser(1);
        console.log("User encontrado ", user)

        console.log("Deu bom Patrão");
        console.log("Buscando Perdido ...", user.id)
        const userPedido = await buscarPerdido(user.id);
        console.log("Pedido encontrado ", userPedido);
        

    }
    catch(erro){
        console.log("Deu ruim Chefia");
    }
}

executar()
