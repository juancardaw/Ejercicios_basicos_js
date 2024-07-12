//Ejercicio que no he conseguido resolver por mi cuenta.

const avengers = ['Hulk', 'Thor', 'Iron Man', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(stringList) { //stringList se utiliza para que valga para cualquier lista
    let longestWord = ""; //Variable que nos guarda la palabra mas larga. Como valor de esta variable se pone "" para que su valor sea 0.

    for (const word of stringList) { //bucle ForOF que nos recorre todo el array de cadena de palabras Avengers
        if(word.length > longestWord.length){ //condicion que nos dice si palabra es mas largo que palabra mas larga
            longestWord = word; //Aqui si LongestWord es mayor que word, nos guarda el valor. 
        }
    }
    console.log(longestWord); //Consola que nos saca la palabra mas larga registrada en cada vuelta despues del bucle
}

findLongestWord(avengers); //Llamada de la funcion


