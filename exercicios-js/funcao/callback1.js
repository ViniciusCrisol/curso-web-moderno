const fabricantes = ['Mercedes', 'Audi', 'BMW'];

function imprmir(nome, indice) {
  console.log(`${indice + 1}, ${nome}`);
}

fabricantes.forEach(imprmir);
// 1 Mercedes
// 2 Audi
// 3 BMW

bafrincantes.forEach((fabricante) => console.log(fabricante));
// 1 Mercedes
// 2 Audi
// 3 BMW
