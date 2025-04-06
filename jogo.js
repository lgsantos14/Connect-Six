const linhas = 7;
const colunas = 9;

// Criação do tabuleiro
const criarTabuleiro = () =>
  Array.from({ length: linhas }, () => Array(colunas).fill(0));

const iniciarJogadores = () => ({ jogadorAtual: 1 });

const estadoInicial = {
  tabuleiro: criarTabuleiro(),
  jogadores: iniciarJogadores(),
};

// Iniciar o tabuleiro
document.addEventListener("DOMContentLoaded", () => {
  const index = document.getElementById("tabuleiro");
  atualizarTabuleiro(index);
});

const atualizarTabuleiro = (index) => {
  index.innerHTML = ""; // Limpa o conteúdo do tabuleiro
  estadoInicial.tabuleiro.forEach((linha, i) => {
    linha.forEach((bolinha, j) => {
      const div = document.createElement("div");
      div.classList.add("bolinha");
      if (bolinha === 1) div.classList.add("jogador1");
      if (bolinha === 2) div.classList.add("jogador2");
      div.addEventListener("click", () => jogar(j));
      index.appendChild(div);
    });
  });
};

// Encontra a primeira linha disponível na coluna escolhida
const jogar = (coluna) => {
  const indiceLinha = estadoInicial.tabuleiro
    .map((linha) => linha[coluna])
    .lastIndexOf(0);
  if (indiceLinha !== -1) {
    const novoTabuleiro = estadoInicial.tabuleiro.map((linha, i) =>
      i === indiceLinha
        ? linha.map((cel, j) =>
            j === coluna ? estadoInicial.jogadores.jogadorAtual : cel
          )
        : linha
    );
    // Atualiza o tabuleiro
    estadoInicial.tabuleiro = novoTabuleiro;
    // Verifica se há um vencedor após a jogada
    if (verificarVitoria(estadoInicial.jogadores.jogadorAtual)) {
      setTimeout(() => {
        //alert(`Jogador ${estadoInicial.jogadores.jogadorAtual} venceu!`);
        Swal.fire(`Jogador ${estadoInicial.jogadores.jogadorAtual} venceu!`);
        estadoInicial.tabuleiro = criarTabuleiro();
        estadoInicial.jogadores = iniciarJogadores();
        atualizarTabuleiro(document.getElementById("tabuleiro"));
      }, 100);
    } else {
      // Altera para o outro jogador
      const proximoJogador = estadoInicial.jogadores.jogadorAtual === 1 ? 2 : 1;
      estadoInicial.jogadores = { jogadorAtual: proximoJogador };
      // Atualiza a interface
      atualizarTabuleiro(document.getElementById("tabuleiro"));
    }
  }
};

// Verificar a vitória
const verificarVitoria = (jogador) => {
  const necessario = 6;

  const temSequencia = (arr) =>
    arr.join("").includes(jogador.toString().repeat(necessario));

  // Verifica as linhas
  if (estadoInicial.tabuleiro.some(temSequencia)) return true;

  // Verifica as colunas
  if (
    Array.from({ length: colunas }, (_, c) =>
      estadoInicial.tabuleiro.map((linha) => linha[c])
    ).some(temSequencia)
  )
    return true;

  // Verifica as diagonais
  const getDiagonais = (dx, dy) =>
    Array.from({ length: linhas * colunas }, (_, i) => {
      const r = Math.floor(i / colunas),
        c = i % colunas;
      return Array.from(
        { length: necessario },
        (_, k) => estadoInicial.tabuleiro[r + k * dx]?.[c + k * dy] || ""
      ).join("");
    });

  return [...getDiagonais(1, 1), ...getDiagonais(1, -1)].some((seq) =>
    seq.includes(jogador.toString().repeat(necessario))
  );
};
