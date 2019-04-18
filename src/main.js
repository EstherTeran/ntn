/* Manejo del DOM */
const root = document.getElementById("root");

const getCharacters = () => {
  return fetch(
    "https://raw.githubusercontent.com/EstherTeran/LIM009-DL-2.0/master/src/data/potter.json"
  ).then(response => {
    return response.json();
  });
};

const painted = pintado => {
  let paintedCharacters = "";
  pintado.forEach(myjson => {
    paintedCharacters += `<div> 
<div><img src="${myjson.image}" alt=""></div><br>
<p><strong>Nombre Del Actor:</strong> ${myjson.actor}<br></p>
<p><strong>Personaje:</strong> <span style="color: grey">${
      myjson.name
    }</span><br></p>
<p><strong>Especie:</strong> ${myjson.species}<br></p>
<p><strong>Casa Ala que pertenece:</strong> ${myjson.house}<br></p>
<p><strong>Edad:</strong> ${myjson.age}<br></p>
<p><strong>Rol:</strong> ${myjson.role}
<img src="${myjson.insignia}" alt="">
</div>`;
  });
  return paintedCharacters;
};

const calculateAge = dateOfBirth => {
  let age = 2019 - parseInt(dateOfBirth);
  if (dateOfBirth === "") {
    age = 0;
  }
  return age;
};

const rolePersonajes = (hogwartsStudent, hogwartsStaff) => {
  let role = "";
  if (hogwartsStudent === true) {
    role = "Estudiante";
  } else if (hogwartsStaff === true) {
    role = "Maestro";
  }
  return role;
};

const houseLogo = house => {
  let insignia = "";
  switch (house) {
    default:
      insignia =
        "https://pngimage.net/wp-content/uploads/2018/06/rayo-harry-potter-png-.png";
      break;
    case "Gryffindor":
      insignia =
        "https://image-cdn.neatoshop.com/styleimg/59804/none/black/default/354928-20;1496501439j.jpg";
      break;
    case "Slytherin":
      insignia =
        "https://elenanofriki.com/3660-thickbox_default/placa-metalica-slytherin-harry-potter.jpg";
      break;
    case "Hufflepuff":
      insignia =
        "https://static.posters.cz/image/750/carteles/harry-potter-hufflepuff-i67993.jpg";
      break;
    case "Ravenclaw":
      insignia =
        "https://images-na.ssl-images-amazon.com/images/I/91lV18S9QQL._SX466_.jpg";
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

const filtrado = (personajes, property, myFilter) => {
  return personajes.filter(personaje => {
    if (personaje[property] === myFilter) {
      return true;
    } else {
      return false;
    }
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

getCharacters().then(myjson => {
  root.innerHTML = painted(converData(myjson));
});

// getCharacters().then(myjson => {
//   root.innerHTML = painted(converData(filtrado(myjson,'house','Ravenclaw')));
// });

getCharacters().then(myjson => {
  const dataProcessed = converData(myjson)
  const dataOrdenada = organized(dataProcessed, 'Ascendente')
  root.innerHTML = painted(dataOrdenada)
})
