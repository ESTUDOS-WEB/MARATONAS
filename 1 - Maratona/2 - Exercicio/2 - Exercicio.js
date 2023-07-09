const listaClientes = require("./clientes.json").clintes;

function verificarClientes() {
  return listaClientes.filter((cliente) => {
    let clienteValido = false;
    if (
      cliente.idade > 18 &&
      cliente.idade < 30 &&
      cliente.endereco.uf === "MG" &&
      cliente.compras.length > 5
    ) {
      clienteValido = true;
    }
    return clienteValido;
  });
}

let listaClientesValidos = verificarClientes(); 
let listaCodigos =  listaClientesValidos.map(cliente => cliente.codigo);
const MESSAGE = `
    Saída:
        Clientes: ${listaCodigos.join(' ')} 
`;

console.log(MESSAGE);

