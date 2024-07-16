const users = [
    { name: "Tony", years: 43 },
    { name: "Peter", years: 18 },
    { name: "Natasha", years: 14 },
    { name: "Bruce", years: 32 },
    { name: "Khamala", years: 16 },
  ];

  const mayoresEdad = [];
  const menoresEdad = [];

  for (const personas of users) {
    if(personas.years >= 18){
        mayoresEdad.push(personas);
    } else if(personas.years < 18){
        menoresEdad.push(personas);
    }
  }
  console.log("Son mayores de edad: ", mayoresEdad);
  console.log("Son menores de edad: ", menoresEdad);