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

