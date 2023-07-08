import * as calc from "./calculos.mjs";

const entrada = [55.6,0,1,0,1,0,0,1,1,0,0,0,0];
const valorEntrada = calc.calcValEntrada(entrada);
const compra = entrada[0];
const valorTroco = calc.calcValTroco(compra, valorEntrada);
const notasTroco = calc.calcNotas(valorTroco);

console.log("Entrada: " + entrada);
console.log("Valor da entrada: " + valorEntrada);
console.log("Valor da compra: " + compra);
console.log("Valor do troco: " + valorTroco);

console.log("\n\nTROCO:");
for(let i = 0; i < notasTroco.length; i++){
    if(notasTroco[i] != 0){
        console.log("-> " + notasTroco[i] + " notas de " + calc.notas[i]);
    }
}
