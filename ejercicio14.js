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
    const contadorPalabra = []

    for (const palabra of list) {
        if(contadorPalabra[palabra]){
            contadorPalabra[palabra] = contadorPalabra[palabra] + 1;
        } else {
            contadorPalabra[palabra] = 1;
        }
    }
    console.log(contadorPalabra);
  }

  repeatCounter(words);