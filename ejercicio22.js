//Sin terminar
const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

const frutasModificadas = []

for (let i = 0; i < foodSchedule.length; i++) {
        const fruta = foodSchedule[i];

        if(fruta.isVegan === false){
          frutasModificadas.push(fruta.name) = fruta.name.replace(fruta.name, fruits);
        }
}

console.log(fruta)
 //No se que cojones estaba haciendo aqui. 
