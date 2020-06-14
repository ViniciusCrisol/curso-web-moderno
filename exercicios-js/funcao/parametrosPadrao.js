// estrategia 1 para gerar valor padrao
function soma1(a, b, c) {
  a = a || 1;
  b = b || 1;
  c = c || 1;

  return a + b + c;
}
console.log(soma1(), soma1(3), soma1(1, 2, 3));
// 3                 5         6

function soma2(a, b, c) {
  a = a !== undefined ? a : 1;
  b = b in arguments ? b : 1;
  c = isNaN(c) ? 1 : c;
}

// valor padrao es5
function soma3(a = 1, b = 2, c = 3) {
  return a + b + c;
}
