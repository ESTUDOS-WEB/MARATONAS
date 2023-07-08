const listaClientes = require("./clientes.json");
const clientes = listaClientes.clintes;
let lclientes = [];

for (let i = 0; i < clientes.length; i++) {
  if (clientes[i].idade <= 30 && clientes[i].idade >= 18 && clientes[i].endereco.uf=="MG" && clientes[i].compras.length>5) {
    console.log("Cliente", clientes[i].codigo, clientes[i]);
    lclientes.push(clientes[i].codigo)
    
  }
}

console.log(lclientes);
