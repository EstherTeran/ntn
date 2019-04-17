/* Manejo del DOM */
const root = document.getElementById('root');

const 
getCharacters=()=>{
  return fetch( "https://raw.githubusercontent.com/EstherTeran/LIM009-DL-2.0/master/src/data/potter.json")
  .then((response)=>{
    return response.json();
  })
}
getCharacters()
.then((myjson)=>{
  root.innerHTML=painted(myjson)
})
const painted=(pintado)=>{
  let paintedCharacters=''
  pintado.forEach(myjson=> {
paintedCharacters+=
`<div> 
<div><img src="${myjson.image}" alt=""></div><br>
<p><strong>Nombre Del Actor:</strong> ${myjson.actor}<br></p>
<p><strong>Personaje:</strong> <span style="color: grey">${myjson.name}</span><br></p>
<p><strong>Especie:</strong> ${myjson.species}<br></p>
<p><strong>Casa Ala que pertenece:</strong> ${myjson.house}<br></p>
<p><strong>Edad:</strong> ${2019-myjson.yearOfBirth}<br></p>
<p><strong>Rol:</strong>
</div>`
 });
return paintedCharacters
};
