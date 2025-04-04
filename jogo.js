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
