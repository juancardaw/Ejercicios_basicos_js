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



let frutasModificadas = []

for (let i = 0; i < foodSchedule.length; i++) {
        if(foodSchedule.isVegan === false){
           frutasModificadas = frutita.replace(frutita[i], fruits);
        }
}

console.log(frutasModificadas)