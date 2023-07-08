const listaClientes = require("./clientes.json");

function noIntervalo(num, inicio, fim){
    if(num > inicio & num < fim){
        return true;
    }
    return false;
}

function consulta(clientes){
    let result = [];

    for(let i = 0; i< clientes.length; i ++){
        if(noIntervalo(clientes[i].idade, 18, 30) && clientes[i].compras.length > 5 && clientes[i].endereco.uf == "MG"){          
            result.push(clientes[i].codigo)    
        }
    }

    return result;
}

console.log("Clientes: " + consulta(listaClientes.clintes));