const alien = {
    name: 'Xenomorph',
    species: 'Xenomorph XX121',
    origin: 'Unknown',
    weight: 180
};

for(const elemento in alien){ //For...in
    console.log("La propiedad: " + elemento + " tiene un valor: " + alien[elemento])
}