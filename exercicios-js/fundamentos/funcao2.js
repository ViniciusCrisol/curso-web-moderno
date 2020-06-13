// Armazenar f unção em variável

const imprimirSoma = function (a, b) {
  console.log(a + b);
};

imprimirSoma(2, 3);

// Armazenar um arrow function
const soma = (a, b) => {
  return a + b;
};

console.log(soma(2, 3));

// retorno implícito
const subtração = (a, b) => a - b;

console.log(subtração(2, 3));
