const names = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  function nameFinder(nameList) {
    const nombreEncontrado = "Jessica";
    
    for(i = 0; i < nameList.length; i++){
        if(nombreEncontrado === nameList[i]){
            console.log(true, "Nombre en posicion: " + i);
        } else {
            console.log(false, "Nombre no encontrado");
        }
    }
}
  
  nameFinder(names);