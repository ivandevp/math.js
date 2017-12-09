const suma = (...numeros) => {
  let resultado = numeros.reduce(
    (valorInicial, valorActual) => valorInicial + valorActual,
    0
  );
  return resultado;
};

const resta = (...numeros) => {
  let resultado = numeros.reduce(
    (valorInicial, valorActual) => valorInicial - valorActual
  );
  return resultado;
};

const multiplicacion = (...numeros) => {
  let resultado = numeros.reduce(
    (valorInicial, valorActual) => valorInicial * valorActual,
    1
  );
  return resultado;
};

const division = (numero1, numero2) =>
  numero1 / numero2;

export {
  suma,
  resta,
  multiplicacion,
  division
}
