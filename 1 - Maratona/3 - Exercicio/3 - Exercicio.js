class Cavalo {
  constructor(nome) {
    this.nome = nome;
    this.pontuacao = 0;
  }
}

let cavalos = new Array();
let quantidadeCavalos = 4;
let time = 0;
let posicaoSelecionada = 0;
let interval;
let ganhador = -1;

let cores = {
  default: "\033[0m",
  verde: "\033[1;32m",
  amarelo: "\033[1;33m",
  vermelho: "\u001b[31m",
  branco: "\033[1;37m",
};

function addCavalos() {
  for (let index = 0; index < quantidadeCavalos; index++) {
    const cavalo = new Cavalo(`Cavalo ${index + 1}`);
    cavalos.push(cavalo);
  }
}

function imprimirPosicaoCavalo(cavalo) {
  [];
  let imprimir = `||`;
  for (let index = 0; index < 10; index++) {
    if (index == cavalo.pontuacao)
      imprimir += `${cores.verde}#####${cores.branco}`;
    else imprimir += `.....`;
  }
  imprimir += `|| (${cavalo.nome})`;
  console.log(imprimir);
}

function updateConsole() {
  console.clear();
  console.log(
    `${cores.branco}||----------------------${cores.vermelho}CORRIDA${cores.branco}---------------------||`
  );
  cavalos.forEach((cavalo) => imprimirPosicaoCavalo(cavalo));
  console.log(`||--------------------------------------------------||`);
  console.log(`${cores.vermelho}Time: ${time}`);
  console.log(`Selecionado: ${selecaoAleatorioCavalo()}`);
  if (ganhador != -1)
    console.log(`O GANHADOR É: ${cavalos[ganhador].nome}${cores.branco}`);
}

function selecaoAleatorioCavalo() {
  let posicao = Math.floor(Math.random() * quantidadeCavalos);
  cavalos[posicao].pontuacao = cavalos[posicao].pontuacao + 1;
  posicaoSelecionada = posicao;
  return posicao;
}

function verificarGanhador() {
  if (cavalos[posicaoSelecionada].pontuacao >= 9) {
    ganhador = posicaoSelecionada;
    clearInterval(interval);
  }
}

function startGame() {
  addCavalos();

  interval = setInterval(() => {
    verificarGanhador();
    updateConsole();
    time++;
  }, 1000);
}

startGame();
