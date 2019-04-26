/* Manejo de data */
const calculateAge = dateOfBirth => {
  let age = 2019 - parseInt(dateOfBirth);
  if (dateOfBirth === '') {
    age = 0;
  }
  return age;
};

const rolePersonajes = (hogwartsStudent, hogwartsStaff) => {
  let role = '';
  if (hogwartsStudent === true) {
    role = 'Estudiante';
  } else if (hogwartsStaff === true) {
    role = 'Maestro';
  }
  return role;
};

const houseLogo = house => {
  let insignia = '';
  switch (house) {
  default:
    insignia = 'https://pngimage.net/wp-content/uploads/2018/06/rayo-harry-potter-png-.png';
    break;
  case 'Gryffindor':
    insignia = 'https://http2.mlstatic.com/insignia-gryffindor-harry-potter-D_NQ_NP_651875-MLC29350802141_022019-F.jpg';
    break;
  case 'Slytherin':
    insignia = 'https://cdn.shopify.com/s/files/1/2393/5817/products/Harry-Potter-Slytherin-Crest-Kids-T-Shirt-Logo-Web_1400x.jpg?v=1511172841';
    break;
  case 'Hufflepuff':
    insignia = 'https://images-na.ssl-images-amazon.com/images/I/61CZcW%2ByIDL._SY606_.jpg';
    break;
  case 'Ravenclaw':
    insignia = 'https://cdn.wallpapersafari.com/72/0/zoDO7R.jpg';
    break;
  }
  return insignia;
}; 

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

const comparisonUpward = (personajeA, personajeB) => {
  const ageOne = personajeA.age;
  const ageTwo = personajeB.age;
  return ageOne - ageTwo; // ascendete
};

const comparisonFalling = (personajeA, personajeB) => {
  const ageOne = personajeA.age;
  const ageTwo = personajeB.age;
  return ageTwo - ageOne;
};

const organized = (personajes, orderDireccion) => {
  if (orderDireccion === 'Ascendente') {
    return personajes.sort(comparisonUpward);
  } else if (orderDireccion === 'Descendente') {
    return personajes.sort(comparisonFalling);
  }
};

const filtrado = (personajes, property, myFilter) => {
  return personajes.filter(personaje => {
    if (personaje[property] === myFilter) {
      return true;
    } else {
      return false;
    }
  }); 
};

window.GlobalFunctions = {
  converData,
  comparisonUpward,
  comparisonFalling,
  organized,
  filtrado
};