//Sin terminar




let frutasModificadas = []

for (let i = 0; i < foodSchedule.length; i++) {
        if(foodSchedule.isVegan === false){
           frutasModificadas = frutita.replace(frutita[i], fruits); //COMENTARIO!!! Revisando, no se porque cojones he puesto "frutita"
        }
}

console.log(frutasModificadas)

