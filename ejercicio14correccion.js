//Ejercicio bien hecho, pero copio el resultado. Ademas poniendo los corchetes no se nos rompe el String

const words = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code'
  ];

  function repeatCounter(list) {
    const resultado = [];

    for(const element of list){
        if(resultado[element]){
            resultado[element] += 1;
        } else {
            resultado[element] = 1;
        }
    }
    console.log(resultado)
  }

  repeatCounter(words);