const mixedElements = [6, 1, 'Marvel', 1, 'hamburguesa', '10', 'Prometeo', 8, 'Hola mundo'];

function averageWord(list) {
//Inicializamos un contador en 0 para acumular el total de numeros tanto numeros como el conteo de letras
let counter = 0;
//Recorremos los elementos de la lista
    for(const element of list){
        if(typeof element === "string"){
            //COn el operador typeof podemos comprobar si un dato es de x tipo u otro
            counter = counter + element.length;
        } else {
            counter = counter + element;
        }
    }
    
    const average = counter / list.length;
    console.log(average)
}

averageWord(mixedElements)
