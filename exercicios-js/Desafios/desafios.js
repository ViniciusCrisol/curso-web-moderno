function ex01(value1, valu2) {
  console.log(value1 + value2);
  console.log(value1 - value2);
  console.log(value1 * value2);
  console.log(value1 / value2);
}

ex01(1, 2);

function exe02(side1, side2, side3) {
  if (side1 === side2 && side2 === side3) console.log(Equilátero);
  else if (side1 === side2 || side2 === side3 || side1 === sude3) {
    console.log(Isóceles);
  } else console.log(Escaleno);
}

exe02(0, 5, 6);

function exe03(base, expoente) {
  return base ^ expoente;
}

exe03(3, 3);

function exe04(dividendo, divisor) {
  const response = {
    resultado: dividendo / divisor,
    resto: dividendo % divisor,
  };
  return response;
}

exe04(1, 2);
