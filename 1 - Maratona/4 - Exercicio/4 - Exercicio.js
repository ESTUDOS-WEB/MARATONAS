const VALOR_DA_COMPRAR = 55.60;
const ENTRADA = [
  VALOR_DA_COMPRAR, // Valor da comprar
  0, // Quant. notas de 100
  1, // Quant. notas de 50
  0, // Quant. notas de 20
  1, // Quant. notas de 10
  0, // Quant. notas de 5
  0, // Quant. notas de 2
  1, // Quant. moeda de 1 real
  1, // Quant. moeda de 50
  0, // Quant. moeda de 25
  0, // Quant. moeda de 10
  0, // Quant. moeda de 5
  0, // Quant. moeda de 1
];

const VALOR_ENTRADA = calcularValorEntrada(ENTRADA);
const VALOR_TROCO = Number(VALOR_ENTRADA - VALOR_DA_COMPRAR).toFixed(2);

function calcularValorEntrada(entrada) {
  const MOEDAS = [100, 50, 20, 10, 5, 2, 1, 0.5, 0.25, 0.1, 0.05, 0.01];
  let valor = 0;

  for (let index = 1; index < entrada.length; index++)
    valor += entrada[index] * MOEDAS[index - 1];
  return valor;
}

function gerarTroco(valorTroco) {
  const MOEDAS_ = [100, 50, 20, 10, 5, 2, 1, 0.5, 0.25, 0.1, 0.05, 0.01];
  let melhorTroco = [];
  let aux;

  MOEDAS_.forEach((valor) => {
    aux = Math.floor(valorTroco / valor);

    if (aux >= 1) {
      melhorTroco.push(aux);
      resto = valorTroco % valor;
      valorTroco = resto;
    } else {
      melhorTroco.push(0);
    }
  });
  return melhorTroco;
}

function messagemTroco() {
  const TROCOS = gerarTroco(VALOR_TROCO);
  const MOEDAS = [100, 50, 20, 10, 5, 2, 1, 0.5, 0.25, 0.1, 0.05, 0.01];
  let messagemTroco = "";

  for (let index = 0; index < MOEDAS.length; index++) {
    if (TROCOS[index] > 0) {
      if (index >= 0 && index < 6) {
        messagemTroco += `\n      -> ${TROCOS[index]} notas de ${MOEDAS[index]} reais`;
      } else {
        messagemTroco += `\n      -> ${TROCOS[index]} moedas de ${MOEDAS[index].toFixed(2)} reais`;
      }
    }
  }
  return messagemTroco;
}

function imprimirResultado() {
  console.log(`
    Entrada: ${ENTRADA} 
    Valor da entrada: ${calcularValorEntrada(ENTRADA)} reais
    Valor da compra: ${ENTRADA[0]} reais
    Valor do troco: ${VALOR_TROCO} reais
    
    TROCO: ${messagemTroco()}

  `);
}

imprimirResultado();