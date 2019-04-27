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
    paintedCharacters += `
    <div class="col-xs-9 col-sm-5 col-lg-4 padding-col"> 
      <div class="card col-xs-12  content-center position-rlt">
        <img class="img-insignia position-abs" src="${pottersData.insignia}" alt="">
      <div class="col-xs-12 container-img-personaje">
        <img class="img-personaje" src="${pottersData.image}" alt="">
      </div>
      <div class="col-xs-12 ">
        <strong class="col-xs-12 card-title">${pottersData.name}</strong>
        <small class="col-xs-12 card-subtitle">${pottersData.house}</small>
        <span class="col-xs-12 text-left"><strong> &#10070; Especie</strong> ${pottersData.species}</span>
        <span class="col-xs-12 text-left"><strong>&#10070; Rol:</strong> ${pottersData.role}</span>
        <span class="col-xs-12 text-left"><strong>&#10070; Edad:</strong> ${pottersData.age}</span>
        <span class="col-xs-12 text-left">&#10070; <strong>Actor:</strong> ${pottersData.actor}</span>
        </div>
      </div>
    </div>
    `;
  });
  return paintedCharacters;
};

const getData = dataPotter => {
  root.innerHTML = painted(GlobalFunctions.converData(dataPotter));
};