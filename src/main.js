/* Manejo del DOM */
const root = document.getElementById("root");
const above = document.getElementById("above"); //arriba ascendente
const down = document.getElementById("down"); //descendente
const gender= document.getElementById("genero");
const role = document.getElementById("Rol");
const house = document.getElementById("house");

above.addEventListener("click", () =>{
getCharacters().then(myjson =>{
  const dataProcessed = converData(myjson);
  const dataOrdenada = organized(dataProcessed, "Ascendente");
  root.innerHTML = painted(dataOrdenada);
})
});

down.addEventListener("click", () =>{
  getCharacters().then(myjson =>{
    const dataProcessed = converData(myjson);
    const dataOrdenada = organized(dataProcessed, "Descendente");
    root.innerHTML = painted(dataOrdenada);
  })
  })

  gender.addEventListener("change", () =>{
    getCharacters().then(myjson => {
      const dataProcessed = converData(myjson);
      const dataFiltrada= filtrado(dataProcessed, "gender", gender.value);
      root.innerHTML = painted(dataFiltrada);
    });
  });

  role.addEventListener("change", () =>{
    getCharacters().then(myjson => {
      const dataProcessed = converData(myjson);
      const dataFiltrada= filtrado(dataProcessed, "role", role.value);
      root.innerHTML = painted(dataFiltrada);
    });
  });

  house.addEventListener("change", () =>{
    getCharacters().then(myjson => {
      const dataProcessed = converData(myjson);
      const dataFiltrada= filtrado(dataProcessed, "house", house.value);
      root.innerHTML = painted(dataFiltrada);
    });
  });

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
    paintedCharacters += `<div class=" card col-xs-5 personaje"> 
    <div><img class="imgI" src="${myjson.insignia}" alt=""></div>
<div><img class="imgHP ll " src="${myjson.image}" alt=""></div>
<div class='nombre'><p><span style="color: grey">${myjson.name}</span></p>
<p>${myjson.house}</p></div>
<p><strong> &#10070; Especie<br>
</strong> ${myjson.species}</p>
<p><strong>&#10070; Rol:</strong> ${myjson.role}</p>
<p><strong>&#10070; Edad:</strong> ${myjson.age}</p>
<p class="text-aling-j">&#10070; <strong>Actor:</strong> ${myjson.actor}</p>
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
        "https://http2.mlstatic.com/insignia-gryffindor-harry-potter-D_NQ_NP_651875-MLC29350802141_022019-F.jpg";
      break;
    case "Slytherin":
      insignia =
        "https://cdn.shopify.com/s/files/1/2393/5817/products/Harry-Potter-Slytherin-Crest-Kids-T-Shirt-Logo-Web_1400x.jpg?v=1511172841";
      break;
    case "Hufflepuff":
      insignia =
        "https://images-na.ssl-images-amazon.com/images/I/61CZcW%2ByIDL._SY606_.jpg";
      break;
    case "Ravenclaw":
      insignia =
        "https://cdn.wallpapersafari.com/72/0/zoDO7R.jpg";
      break;
  }
  return insignia;
};

getCharacters().then(myjson => {
  root.innerHTML = painted(converData(myjson));
});

// getCharacters().then(myjson => {
//   const dataProcessed = converData(myjson);
//   const dataFiltrada= filtrado(dataProcessed, "role", "Estudiante");
//   root.innerHTML = painted(dataFiltrada);
// });

{
  /* <div class="container-insignia">
<div class="cuadrado">
<img class="imgI ll" src="${myjson.insignia}" alt="">
</div>
<div class="container-footer-logo">
  <div class="divcortado2"> </div>
  <div class="divcortado1"></div>
</div>
</div> */}