const notas = [100, 50, 20, 10, 5, 2, 1, 0.5, 0.25, 0.1, 0.05, 0.01];
let entrada = [55.6, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0];
let valor, compra, troco;
let array = [];

function valordeentrada(entrada) {
  let valornotasdeentrada = 0;
  for (let i = 0; i < notas.length; i++) {
    valornotasdeentrada = valornotasdeentrada + entrada[i + 1] * notas[i];
    // console.log(entrada[i+1]);
  }
  return valornotasdeentrada;
}

valor = valordeentrada(entrada);
compra = entrada[0];
troco = Number(valor - compra).toFixed(2);

console.log("valor de entrada", valor);
console.log("valor da compra", compra);
console.log("valor de troco", troco);

for (let i = 0; i < notas.length; i++) {
  let nnotas = Math.trunc(troco / notas[i]);
  if (nnotas > 0) {
    array.push([notas[i], nnotas]);
  }
  troco = troco - nnotas * notas[i];
}

for (let i = 0; i < array.length; i++) {
  let nome = "Notas";
  if (array[i][0] <= 1) {
    nome = "Moedas";
  }
  console.log(array[i][1], nome, array[i][0]);
}
