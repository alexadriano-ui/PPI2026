// IFRN - Campus Macau
// Programação para Internet
// Prof. Guilherme Leal
// Discente: Alex Adriano

// DESAFIO - 2

// Questão 1 — Média de notas e filtro de aprovados

const alunos = [
  { nome: "Ana", notas: [8, 7, 9] },
  { nome: "Bruno", notas: [5, 6, 5] },
  { nome: "Carla", notas: [9, 9, 10] },
  { nome: "Diego", notas: [6, 7, 8] },
];

const aprovados = alunos
  .map(aluno => {
    const soma = aluno.notas.reduce(
      (total, nota) => total + nota,
      0
    );

const media = soma / aluno.notas.length;
return {
      nome: aluno.nome,
      media: Number(media.toFixed(2))
    };
  })

  .filter(aluno => aluno.media >= 7)
  .sort((a, b) => b.media - a.media);

//console.log(aprovados);


// Questão 2 — Catálogo de filmes com busca e ordenação

const filmes = [
  { titulo: "O Senhor dos Anéis", ano: 2001, genero: "fantasia" },
  { titulo: "Matrix", ano: 1999, genero: "ficção" },
  { titulo: "Interestelar", ano: 2014, genero: "ficção" },
  { titulo: "Divertida Mente", ano: 2015, genero: "animação" },
];

function buscarFilmes(genero, criterio) {
  let resultado = filmes.filter(
    filme => filme.genero === genero
  );

  if (criterio === "ano") {
    resultado.sort((a, b) => b.ano - a.ano);
  } else if (criterio === "titulo") {
    resultado.sort((a, b) =>
      a.titulo.localeCompare(b.titulo)
    );
  }

  resultado = resultado.map(
    filme => `${filme.titulo} (${filme.ano}) - ${filme.genero}`
  );

  return resultado;
}

console.log(buscarFilmes('ficção','ano'));