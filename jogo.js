<<<<<<< HEAD
const linhas = 7;
const colunas = 9;

// Criação do tabuleiro
const criarTabuleiro = () =>
  Array.from({ length: linhas }, () => Array(colunas).fill(0));

const iniciarJogadores = () => ({ jogadorAtual: 1 });
=======
const linhas = 7
const colunas = 9

// Criação do tabuleiro
const criarTabuleiro = () =>
  Array.from({ length: linhas }, () => Array(colunas).fill(0))

const iniciarJogadores = () => ({ jogadorAtual: 1 })
>>>>>>> 3d3e586 (Adição lógica)

const estadoInicial = {
  tabuleiro: criarTabuleiro(),
  jogadores: iniciarJogadores(),
<<<<<<< HEAD
};
=======
}
>>>>>>> 3d3e586 (Adição lógica)

const getDiagonais = (dx, dy) =>
  Array.from({ length: linhas * colunas }, (_, i) => {
    const r = Math.floor(i / colunas),
      c = i % colunas;
    return Array.from(
      { length: necessario },
<<<<<<< HEAD
      (_, k) => estadoInicial.tabuleiro[r + k * dx]?.[c + k * dy] || ""
    ).join("");
  });

// Verifica as diagonais
return [...getDiagonais(1, 1), ...getDiagonais(1, -1)].some((seq) =>
  seq.includes(jogador.toString().repeat(necessario))
);
=======
      (_, k) => estadoInicial.tabuleiro[r + k * dx]?.[c + k * dy] || ""  ).join("")
  })

// Verifica as diagonais
return [...getDiagonais(1, 1), ...getDiagonais(1, -1)].some((seq) =>
  seq.includes(jogador.toString().repeat(necessario)))
const verificarVitoria = (jogador) =>
  const necessario = 6
  const temSequencia = (arr) =>
    arr.join("").includes(jogador.toString().repeat(necessario))
  // Verifica as linhas
  if (estadoInicial.tabuleiro.some(temSequencia)) return true
  // Verifica as colunas
  if (
    Array.from({ length: colunas }, (_, c) =>
      estadoInicial.tabuleiro.map((linha) => linha[c])
    ).some(temSequencia))
    return true 
>>>>>>> 3d3e586 (Adição lógica)
