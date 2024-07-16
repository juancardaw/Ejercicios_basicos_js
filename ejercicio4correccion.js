const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];

//4.3 - Cambia el primer elemento de este array por "Bambina".
aldeanos[0] = "Bambina";
console.log(aldeanos)

//4.5 - Cambia a "Narciso" por "Canela" haciendo uso de un método de array.
aldeanos.splice(4, 1, "Canela") //.splice(*posicion a borrar, *Elementos que queremos eliminar, *Elemento añadir)
console.log(aldeanos)
//Otra solucion
const narciso = aldeanos.indexOf("Narciso");
aldeanos.splice(narciso, 1, "Canela");
console.log(aldeanos);