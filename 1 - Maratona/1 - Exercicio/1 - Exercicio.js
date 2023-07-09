function getInpar(vetor) {
  return vetor.filter((numero) => numero % 2 != 0);
}

function getPar(vetor) {
  return vetor.filter((numero) => numero % 2 == 0);
}

function getMaior(vetor) {
  let maior = -Infinity;
  vetor.forEach((numero) => {
    if (maior < numero) {
      maior = numero;
    }
  });
  return maior;
}

function getMenor(vetor) {
  let menor = Infinity;
  vetor.forEach((numero) => {
    if (menor > numero) {
      menor = numero;
    }
  });
  return menor;
}

function getSoma(vetor) {
  return vetor.reduce((soma, atual) => (soma += atual), 0);
}

function getResultado(vetor) {
  return {
    inpares: getInpar(vetor),
    pares: getPar(vetor),
    maior: getMaior(vetor),
    menor: getMenor(vetor),
    soma: getSoma(vetor),
  };
}

function imprimirResultado(resultado) {
  const MESSAGE = `
    Entrada: [${vetor}]
    Saída:
        Inpares: ${resultado.inpares}
        Pares: ${resultado.pares}
        Maior: ${resultado.maior}
        Menor: ${resultado.menor}
        Soma: ${resultado.soma}
        `;
  console.log(MESSAGE);
}

let vetor = [1, 5, -8, 1000, -89787];
let resultado = getResultado(vetor);

imprimirResultado(resultado);
