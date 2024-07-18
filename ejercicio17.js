const alien = {
    name: 'Xenomorph',
    species: 'Xenomorph XX121',
    origin: 'Unknown',
    weight: 180
};

for (const propiedadAlien in alien) {
    if (Object.hasOwnProperty.call(alien, propiedadAlien)) {
        const elemento = alien[propiedadAlien];
        console.log("La propiedad "+ propiedadAlien + " tiene " + elemento);
    }
}

//En el archivo de correccion, lo hecho de la manera mas facil y corta, para que sea menos lioso para mi. Aqui en cambio he utilizado el For...in predeterminado de JS.