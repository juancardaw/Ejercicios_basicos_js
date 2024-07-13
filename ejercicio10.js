const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(numberList) {
    let suma = 0
    for (const numero of numberList){
        suma = suma + numero;
        promedio = suma / numberList.length; //Apunte: numberList.length reccore las posiciones del array
    }
    console.log(promedio)
}

average(numbers)

