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

const getDiagonais = (dx, dy) =>
  Array.from({ length: linhas * colunas }, (_, i) => {
    const r = Math.floor(i / colunas),
      c = i % colunas;
    return Array.from(
      { length: necessario },
      (_, k) => estadoInicial.tabuleiro[r + k * dx]?.[c + k * dy] || ""
    ).join("");
  });

// Verifica as diagonais
return [...getDiagonais(1, 1), ...getDiagonais(1, -1)].some((seq) =>
  seq.includes(jogador.toString().repeat(necessario))
);