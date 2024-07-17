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
  function nameFinder(nameList, name) { //Ponemos la propiedad "Nombre" para que cuando ejecutemos la funcion, solo metamos el nombre. 
    const position = nameList.indexOf(name); //Creamos la constante, que seria igual a array-IndexOf() que como ya sé, nos saca la posicion de donde se encuentra el elemento a buscar.
    console.log("El nombre es la en la posicion del array numero: ", position); //Sacamos por consola la posicion del nombre. 
  }

  nameFinder(names, "Peggy")

  //Esto es mucho mas facil, no la puta complicacion que he hecho con los bucles