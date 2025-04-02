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
