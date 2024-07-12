const arrayNumeros = [4, 6, 10, 20, 50, 100, 10];

function sumNumeros(numberList){
  let suma = 0;
  for (const numero of numberList) {
    suma = suma + numero // suma += numero
  }
  console.log(suma);
}

sumNumeros(arrayNumeros);

















