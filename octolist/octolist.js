
function popUp(id=0){
  for(let i = 0; i<keyocto.length;i++)
  {
    if(keyocto[i]!=id || document.getElementById(`pop-pup-${id}`).style.visibility=="visible"){
      document.getElementById(`pop-pup-${keyocto[i]}`).style.visibility="hidden";
    }
    else{
      document.getElementById(`pop-pup-${id}`).style.visibility="visible";
    }
  }
}

const listOcto = {
  id1 : {
    nom : "test",
    nom_scientifique : "testum",
    taille : "10",
    couleur : "rouge"
  },
  id2 : {
    nom : "testa",
    nom_scientifique : "test",
    taille : "25",
    couleur : "jaune"
  }
};

const keyocto = Object.keys(listOcto);

for(let i = 0; i<keyocto.length;i++){
  document.getElementById(`pop-pup-${keyocto[i]}`).innerHTML = `
  nom : ${listOcto[`${keyocto[i]}`][`nom`]}<br>
  nom_scientifique : ${listOcto[`${keyocto[i]}`][`nom_scientifique`]}<br>
  taille : ${listOcto[`${keyocto[i]}`][`taille`]}<br>
  couleur : ${listOcto[`${keyocto[i]}`][`couleur`]}<br>`;
}


