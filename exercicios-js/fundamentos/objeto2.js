console.log(typeof Object);
// Retorna uma função
console.log(typeof new Object());
// Retorna um objeto

const cliente = function () {};
console.log(typeof cliente);
// Retorna uma função
console.log(typeof new cliente());
// Retorna um objeto

class produto {}
console.log(typeof produto);
// Retorna uma função
console.log(typeof new produto());
// Retorna uma função
