/* Manejo del DOM */
const root = document.getElementById("root");
const above = document.getElementById("above"); //arriba ascendente
const down = document.getElementById("down"); //descendente
const gender = document.getElementById("gender");
const role = document.getElementById("Rol");
const house = document.getElementById("house");

above.addEventListener("click", () => {
  getCharacters().then(myjson => {
    const dataProcessed = converData(myjson);
    const dataOrdenada = organized(dataProcessed, "Ascendente");
    root.innerHTML = painted(dataOrdenada);
  });
});

down.addEventListener("click", () => {
  getCharacters().then(myjson => {
    const dataProcessed = converData(myjson);
    const dataOrdenada = organized(dataProcessed, "Descendente");
    root.innerHTML = painted(dataOrdenada);
  });
});

gender.addEventListener("change", () => {
  getCharacters().then(myjson => {
    const dataProcessed = converData(myjson);
    const dataFiltrada = filtrado(dataProcessed, "gender", gender.value);
    root.innerHTML = painted(dataFiltrada);
  });
});

role.addEventListener("change", () => {
  getCharacters().then(myjson => {
    const dataProcessed = converData(myjson);
    const dataFiltrada = filtrado(dataProcessed, "role", role.value);
    root.innerHTML = painted(dataFiltrada);
  });
});

house.addEventListener("change", () => {
  getCharacters().then(myjson => {
    const dataProcessed = converData(myjson);
    const dataFiltrada = filtrado(dataProcessed, "house", house.value);
    root.innerHTML = painted(dataFiltrada);
  });
});

const getCharacters = () => {
  return fetch(
    "https://raw.githubusercontent.com/EstherTeran/LIM009-DL-2.0/master/src/data/potter.json"
  ).then(response => {
    return response.json();
  }
  );
};

const painted = pintado => {
  let paintedCharacters = "";
  pintado.forEach(myjson => {
    paintedCharacters += `<div class=" card col-xs-5 personaje"> 
    <div><img class="imgI" src="${myjson.insignia}" alt=""></div>
<div><img class="imgHP ll " src="${myjson.image}" alt=""></div>
<div><p>${myjson.name}</p>
<p>${myjson.house}</p></div>
<p><strong> &#10070; Especie<br></strong> ${myjson.species}</p>
<p><strong>&#10070; Rol:</strong> ${myjson.role}</p>
<p><strong>&#10070; Edad:</strong> ${myjson.age}</p>
<p class="text-aling-j">&#10070; <strong>Actor:</strong> ${myjson.actor}</p>
</div>`;
  });
  return paintedCharacters;
};
getCharacters().then(myjson => {
  root.innerHTML = painted(converData(myjson));
  console.log(converData(myjson));
});

// getCharacters().then(myjson => {
//   const dataProcessed = converData(myjson);
//   const dataFiltrada= filtrado(dataProcessed, "role", "Estudiante");
//   root.innerHTML = painted(dataFiltrada);
// });

// {
  /* <div class="container-insignia">
<div class="cuadrado">
<img class="imgI ll" src="${myjson.insignia}" alt="">
</div>
<div class="container-footer-logo">
  <div class="divcortado2"> </div>
  <div class="divcortado1"></div>
</div>
</div> */
// }
