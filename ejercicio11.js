const mixedElements = [6, 1, 'Marvel', 1, 'hamburguesa', '10', 'Prometeo', 8, 'Hola mundo'];
function averageWord(list) {
    let sumaNumero = 0;
    let sumaLetra = 0;
    
    for (const numeroLetra of list) {
        if(typeof numeroLetra === "number"){
            sumaNumero = sumaNumero + numeroLetra;
        } else if(typeof numeroLetra === "string"){
            sumaLetra = sumaLetra + numeroLetra.length;
        }
    sumaTotal = sumaNumero + sumaLetra;
    }
    console.log(sumaTotal);
}

averageWord(mixedElements);

//Recordatorio: EL valor Typeoff nos devuelve que tipo de dato es de la variable o constante (strinf, booleano, number,...)