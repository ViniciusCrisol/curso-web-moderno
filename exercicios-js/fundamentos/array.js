const valores = [2, 3, 4, 3, 5, 6.8];
console.log(valores[0], valores[3]);

valores[10] = 10;

console.log(valores);
console.log(valores.length);

valores.push('Amor');
console.log(valores);

delete valores[0];
console.log(valores);
