const placesToTravel = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]

for( i = 0; i < placesToTravel.length; i++){
const viaje = placesToTravel[i];
const viajesNuevos = [];

    if(viaje.id !== 40 && viaje.id !== 10){
        viajesNuevos.push(viaje);
        console.log(viajesNuevos)
    }
}
    
