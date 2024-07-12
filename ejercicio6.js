//1.1 Crea un bucle for que vaya desde 0 a 9 y muestra el valor de i por consola.
for(i = 0; i < 10; i++){
console.log(i);
}

/*1.2 Crea un bucle for que vaya desde 0 a 9 y muestra el valor de i por consola solo 
cuando el resto del numero dividido entre 2 sea 0.*/
for(i = 0; i < 10; i++){
    let resto = i % 2;
    if(resto === 0){
        console.log(division);
    }
}

/*1.3 Crea un bucle para conseguir dormir contando ovejas. 
Este bucle tiene que dar 10 vueltas, es decir, 10 console.log.
Muestra por consola un mensaje diciendo 'Intentando dormir 🐑' en cada vuelta del bucle 
y cambia el mensaje en la décima vuelta a '¡Dormido!'.*/
for(i = 1; i < 10; i++){
    console.log("Intentando dormir " + i + " 🐑");
    if(i === 9){
        console.log("Dormido");
    }
}