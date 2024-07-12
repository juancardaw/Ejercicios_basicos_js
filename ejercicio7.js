
function greaterNumber(numberOne, numberTwo){
     if(numberOne > numberTwo){
        return numberOne;
    } else {
        return numberTwo;
    } 
}

let numberOne = 9;
let numberTwo = 6;
let resultado = greaterNumber(numberOne, numberTwo);
console.log(resultado)