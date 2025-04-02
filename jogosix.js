const linhas = 7;
const colunas = 9;

// Criação do tabuleiro
const criarTabuleiro = () =>
  Array.from({ length: linhas }, () => Array(colunas).fill(0));

const iniciarJogadores = () => ({ jogadorAtual: 1 });

const estadoInicial = {
  tabuleiro: criarTabuleiro(),
  jogadores: iniciarJogadores(),
}
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
      return true
    }