const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];


let j = 0; //Variable utilizada para recorrer el array de fruits

for (i = 0; i < foodSchedule.length; i++){ //Bucle For, como siempre
    const fruta = foodSchedule[i];

    if(!fruta.isVegan){ //Si fruta No es vegano
        fruta.name = fruits[j]; //Si la condicion se cumple, Fruta.Name es igual a Fruits[j] (para recorrer el array "fruits", y no coja una posicion logica concreta) y asi poder cambiar la palabra de un array a otro. 
        j++; //Sumamos +1 en J, para poder seguir recorriendo el array Fruits. 
    }
}

console.log(foodSchedule);