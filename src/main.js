/* Manejo del DOM */
const root = document.getElementById('root');
const above = document.getElementById('above'); // arriba ascendente
const down = document.getElementById('down'); // descendente
const gender = document.getElementById('gender');
const role = document.getElementById('Rol');
const house = document.getElementById('house');

const aboves = dataPotter => {
  above.addEventListener('click', () => {
    const sort = GlobalFunctions.organized(dataPotter, 'Ascendente');
    root.innerHTML = painted(sort);
  });
};

const downs = dataPotter => {
  down.addEventListener('click', () => {
    const sort = GlobalFunctions.organized(dataPotter, 'Descendente');
    root.innerHTML = painted(sort);
  });
};

const genders = dataPotter => {
  gender.addEventListener('change', () => {
    const filter = GlobalFunctions.filtrado(dataPotter, 'gender', gender.value);
    root.innerHTML = painted(filter);
  });
};

const roles = dataPotter => {
  role.addEventListener('change', () => {
    const filter = GlobalFunctions.filtrado(dataPotter, 'role', role.value);
    root.innerHTML = painted(filter);
  });
};

const houses = dataPotter => { 
  house.addEventListener('change', () => {
    const filter = GlobalFunctions.filtrado(dataPotter, 'house', house.value);
    root.innerHTML = painted(filter);
  });
};

fetch('https://raw.githubusercontent.com/EstherTeran/LIM009-DL-2.0/master/src/data/potter.json')
  .then(response => {
    return response.json();
  })
  .then(dataPotter => {
    getData(dataPotter);
    roles(dataPotter);
    houses(dataPotter);
    genders(dataPotter);
    downs(dataPotter);
    aboves(dataPotter);
  });

const painted = pintado => {
  let paintedCharacters = '';
  pintado.forEach(pottersData => {
    paintedCharacters += `<div class="  col-xs-5     col-md-5  col-lg-4 p-20"> 
    <div class=" card col-xs-12">
    <img class="img-insignia" src="${pottersData.insignia}" alt="">
    <div class="col-xs-12 ">  
    <div class="col-xs-6 img-person">
    <img class="img-personaje ll " src="${pottersData.image}" alt="">
    </div>
    </div>
  <div class="col-xs-12"><p>${pottersData.name}</p><p>${pottersData.house}</p></div>
    <p class="col-xs-12"><strong> &#10070; Especie<br></strong> ${pottersData.species}</p>
    <p class="col-xs-12"><strong>&#10070; Rol:</strong> ${pottersData.role}</p>
    <p class="col-xs-12"><strong>&#10070; Edad:</strong> ${pottersData.age}</p>
    <p class="col-xs-12 text-aling-j">&#10070; <strong>Actor:</strong> ${pottersData.actor}</p></div>
    </div>
    `;
  });
  return paintedCharacters;
};

const getData = dataPotter => {
  root.innerHTML = painted(GlobalFunctions.converData(dataPotter));
};