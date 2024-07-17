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
    const uniques = [];

    for(const element of list) {
        if(!uniques.includes(element)){ //Si uniques NO incluye el elemento de la lista repetido, se cumple la  condicion, y uniques.push(element) lo metera dentro del nuevo array uniques
            uniques.push(element);
        }
    }
    console.log(uniques);
  }

  removeDuplicates(duplicates);