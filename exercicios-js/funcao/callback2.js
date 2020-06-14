const notas = [7, 7, 4, 2, 4, 9.8, 6, 6, 6, 9, 0];

// Sem callback
let notasBaixas = [];
for (let i in notas) {
  if (notas[i] < 7) {
    notasBaixas.push(notas[i]);
  }
}

console.log(notasBaixas);

// Com callback

notasBaixas2 = notas.filter((nota) => nota < 7);

console.log(notasBaixas2);
