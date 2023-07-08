const array = [1, 5, -8, 1000, -89787];

function compara(a, b) {
  if (a < b) {
    return -1;
  } else {
    return 1;
  }
}

let pares = array.filter((a) => a % 2 == 0);
let impares = array.filter((a) => a % 2 == 1);
let ordenado = array.sort(compara);
let soma = array.reduce((a, b) => a + b, 0);
let menor = ordenado[0];
let maior = ordenado[array.length - 1];

console.log("Pares:", pares);
console.log("Impares", impares);
console.log("Menor", menor);
console.log("Maior", maior);
console.log("Soma", soma);
