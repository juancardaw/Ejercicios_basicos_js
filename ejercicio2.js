//2.1 Luke Skywalker cumple años:
//Modifica el siguiente código JavaScript para actualizar la edad de Luke Skywalker a 25 años.
//const jedi = {nombre: "Luke Skywalker", edad: 19};
const jedi = {nombre: "Luke Skywalker", edad: 19};
jedi.edad = 25;
console.log(jedi);


// 2.2 Presentación al estilo Leia Organa:
//Crea tres variables con la siguiente información:
//nombre: "Leia"
//apellido: "Organa"
//edad: 20
//Muestra un mensaje por consola que siga la siguiente estructura:
//"Soy Leia Organa, tengo 20 años y soy una princesa de Alderaan."
//Utiliza la concatenación para ello.

let nombre = "Leia";
let apellido = "Organa";
let edad = 20;

console.log("Soy " + nombre + " " + apellido + ", tengo " + edad + " años y soy una princesa de Alderaan.");


//2.3 Calculando el coste total de sables de luz:
const sable1 = {nombre: "Shoto de Yoda", precio: 1500};
const sable2 = {nombre: "Sable de Darth Vader", precio: 2000};

let sumaPrecio = (sable1.precio + sable2.precio);

console.log(sumaPrecio);


//2.4 Actualizando el precio final de las naves:
//- Modifica el valor de la variable global precioBaseGlobal a 25.000 créditos.
//- Actualiza el precio final (precioFinal) de dos naves ("Ala-X" y "Halcón Milenario") sumando el valor de precioBaseGlobal a su precio base (precioBase).

let precioBaseGlobal = 10000;

// Cambia el precio base en esta linea modificando la variable
precioBaseGlobal = 25000;

const nave1 = {nombre: "Ala-X", precioBase: 50000, precioFinal: 60000};
const nave2 = {nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 80000};

nave1.precioFinal = (precioBaseGlobal + nave1.precioBase);
nave2.precioFinal = (precioBaseGlobal + nave2.precioBase);

console.log(nave1.precioFinal);
console.log(nave2.precioFinal);