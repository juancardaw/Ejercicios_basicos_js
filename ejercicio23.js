const movies = [
    { name: "Titan A.E.", durationInMinutes: 130 },
    { name: "Nightmare before Christmas", durationInMinutes: 225 },
    { name: "Inception", durationInMinutes: 165 },
    { name: "The Lord of the Rings", durationInMinutes: 967 },
    { name: "Star Wars: A New Hope", durationInMinutes: 214 },
    { name: "Terminator", durationInMinutes: 140 },
    { name: "Spirited Away", durationInMinutes: 80 },  
    { name: "The Matrix", durationInMinutes: 136 },  
    { name: "Amélie", durationInMinutes: 110 },  
    { name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 },
  ];

const duracionPeq = [];
const duracionMed = [];
const duracionLar = [];

for (const duracion of movies) {
    if(duracion.durationInMinutes <= 100){
        duracionPeq.push(duracion);
    } else if(duracion.durationInMinutes > 100 && duracion.durationInMinutes < 200){
        duracionMed.push(duracion);
    } else if (duracion.durationInMinutes >= 200){
        duracionLar.push(duracion);
    }
}

console.log("La duracion pequeña es: ",  duracionPeq);
console.log("La duracion media es: ", duracionMed);
console.log("La duracion larga es: ", duracionLar);