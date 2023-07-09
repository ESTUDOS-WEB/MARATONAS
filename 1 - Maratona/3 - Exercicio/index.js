let posicoes = [2, 2, 2, 2];

let inicioPista = "||---------------------CORRIDA----------------------||";
let cavalos = [];
let cavalo1 = "||..................................................||";
let cavalo2 = "||..................................................||";
let cavalo3 = "||..................................................||";
let cavalo4 = "||..................................................||";
let fimdaPista = "||--------------------------------------------------||";

function moveCavalo(cavalos, posicoes) {
  let aux = [];
  for (let l = 0; l < 4; l++) {
    let aux2 = cavalos[l].split("");
    for (let i = 0; i < 5; i++) {
      aux2[posicoes[l] + i] = "#";
    }
    aux.push(aux2.join(""));
  }
  console.clear();
  console.log(inicioPista);

  for (let j = 0; j < 4; j++) {
    console.log(aux[j]);
  }
  console.log(fimdaPista);
  console.log(posicoes);

  // Verificar se alguma posição é maior que 46
  if (posicoes.some((posicao) => posicao > 46)) {
    clearInterval(intervaloID); // Parar a execução do intervalo
    console.log("Corrida encerrada!"); // Mensagem de encerramento
  }
}

function sorteio() {
  moveCavalo(cavalos, posicoes);
  let posicaoSorteada = Math.floor(Math.random() * 4);
  posicoes[posicaoSorteada]++;
}

cavalos.push(cavalo1);
cavalos.push(cavalo2);
cavalos.push(cavalo3);
cavalos.push(cavalo4);

const intervaloID = setInterval(sorteio, 30);
