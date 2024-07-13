const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda',
  ];

  function removeDuplicates(list){
    const arraySinDuplicar = []; //Creamos una array vacia para almacenar las palabras unicas
    const arrayUnica = new Set(list);  //Creamos un objeto con la propiedad "new Set(list)". El elemento "set" almacena elementos unicos ignorando el duplicado

    for (const palabra of arrayUnica) { //IMPORTANTE!! Ponemos que el bucle recorre la const "ArrayUnica", ya que almacena anteriormente la array original, ya que la llamamos a traves del valor generico "list"
        arraySinDuplicar.push(palabra); //Agregamos Push para almacenar letras al final del array en cada bucle (como ejercicios anteriores de arrays)
    }
    console.log(arraySinDuplicar);
  }

  removeDuplicates(duplicates);