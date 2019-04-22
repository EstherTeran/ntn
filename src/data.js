/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const example = () => {
  return 'example';
};

window.example = example;

const converData = Personajes => {
  return Personajes.map(personaje => {
    personaje.age = calculateAge(personaje.yearOfBirth);
    personaje.role = rolePersonajes(
      personaje.hogwartsStudent,
      personaje.hogwartsStaff
    );
    personaje.insignia = houseLogo(personaje.house);
    return personaje;
  });
};

const comparisonUpward= (personajeA,personajeB) => {
  const ageOne = personajeA.age;
  const ageTwo = personajeB.age
  return ageOne - ageTwo 
};

const comparisonFalling= (personajeA,personajeB) => {
  const ageOne = personajeA.age;
  const ageTwo = personajeB.age
  return ageTwo - ageOne
};

const organized =(personajes,orderDireccion) => {
  if(orderDireccion === 'Ascendente'){
return personajes.sort(comparisonUpward)
}else if (orderDireccion === 'Descendente'){
  return personajes.sort(comparisonFalling)
}
}

const filtrado = (personajes, property, myFilter) => {
  return personajes.filter(personaje => {
    if (personaje[property] === myFilter) {
      return true;
    } else {
      return false;
    }
  });
};ht