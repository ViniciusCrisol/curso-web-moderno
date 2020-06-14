// First-Class Object
// High Order Function

// Criar de forma literal
function fun1() {}

// Armazenar função na avariável
const fun2 = () => {};

// Armazenar em um array
const array = [
  (a, b) => {
    return a, b;
  },
];

// Armazenar em um atributo de objeto
const obj = {
  falar: () => {
    return 'Amor';
  },
};

console.log(obj.falar());

// Passar função como parâmetro
function run(fun) {
  fun();
}

run(() => {
  console.log('Amor...');
});

// Retornar uma função
function soma(a, b) {
  return (c) => {
    console.log(a + b + c);
  };
}

soma(2, 3)(4);
// 9
