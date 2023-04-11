function popUpZoom(id=0)
{
  let alreadyzoom = true;
  if(id!=0)
  {alreadyzoom = document.getElementById(`pop-pup-${id}`).style.visibility=="visible";}
  //cas si pas une image zoomé
  if(!alreadyzoom){
    document.getElementById("popup-list").innerHTML = 
    `<div class="popup" style="animation:none;" onclick="popUpZoom('${id}')">
    <img scr="" width="800" height="500" style="border-radius: 2px;" id="img${id}">
    <span class="popuptext" id="pop-pup-${id}" span>
    </div>`; 
    document.getElementById(`pop-pup-${id}`).style="visibility: visible;right: -170px;"
    document.getElementById(`img${id}`).style=`right: 140px;position: relative;animation:zoomin 1s;`;
    for(let j = 0; j<subkey.length;j++){
      if(subkey[j]=="img_src"){
        document.getElementById(`img${id}`).src = listOcto[`${id}`][`${subkey[j]}`];
        continue;
      }
      document.getElementById(`pop-pup-${id}`).innerHTML += `${subkey[j]} : ${listOcto[`${id}`][`${subkey[j]}`]}`;
      if(j!=subkey.length-2){document.getElementById(`pop-pup-${id}`).innerHTML +='<br><br>';}
    };
    document.getElementById("mn2").innerHTML = `<a style="animation:none;" onclick="popUpZoom()">RETOUR</a>`;
  };
  //cas si une image zoomé
  if(alreadyzoom){
    document.getElementById("popup-list").innerHTML = "";
    for(let i = 0; i<keyocto.length;i++){
      document.getElementById("popup-list").innerHTML+=
      `<div class="popup" style="animation:none;" onclick="popUpZoom('${keyocto[i]}')">
      <img width="400" height="200" style="border-radius: 2px;" id="img${keyocto[i]}">
      <span class="popuptext" id="pop-pup-${keyocto[i]}"></span>
      </div>`;
      document.getElementById(`pop-pup-${keyocto[i]}`).style="height: 5px;width: 5px;right:0px;";
      document.getElementById(`img${keyocto[i]}`).src = listOcto[`${keyocto[i]}`]["img_src"];
      document.getElementById(`pop-pup-${keyocto[i]}`).innerHTML = "";
      };
    document.getElementById("mn2").innerHTML = `<a style="animation:none;" href="1info-general.html">RETOUR</a>`;
    };
};
//tableau 2d, representant notre base de données. Ecris de telle façon pour facilité l'ajout de nouvelle ligne. 
//convertir plus tard en objet pour facilité le traitement
const dbOcto = [
["Nom","Nom scientifique","Zone géographique","Taille","Couleur", "Description", "img_src"],//nom des colones

["Pieuvre à anneaux bleus","Hapalochlaena maculosa", "Côtes australiennes, Océan Indien et Pacifique", "10 à 15cm", "beige ou jaune pâle avec des anneaux bleus", "Cette pieuvre est l’une des rares capables de tuer un humain avec son poison. Ces anneaux bleus luminescent servent à prévenir les prédateurs de la dangerosité de l’animal", "octolist/images/Pieuvre-aux-anneaux-bleus.jpg"],

["Pieuvre blanche","Eledone cirrhosa","Atlantique Nord-Est, la Manche, la mer Méditerranée et la mer du Nord","50cm","jaune, orange, rouge","Eledone cirrhosa représente une importante source de commerce dans le bassin méditerranéen","octolist/images/Pieuvre-blanche.jpg"],

["Poulpe boréal","Bathypolypus arcticus","Atlantique Nord-Ouest et Nord-Est","6 à 10 cm","brun-rose","Sa longévité serait supérieur à 3 voire 6 ans ce qui est beaucoup plus que la moyennes des autres poulpes","octolist/images/poulpe-boreal.jpg"],

["Pieuvre commune","Octopus vulgaris","Répartition Mondiale","60 à 120cm","homochromie","En Méditerranée, il est interdit de pêcher le poulpe commun dans le Parc National des Calanques entre le 1er juin et le 30 septembre pour le protéger pendant sa période de reproduction.","octolist/images/pieuvre-commune.jpg"],

["Pieuvre chatrou de nuit", "Octopus briareus","Caraïbes", "30 à 60cm", "brun-rouge tacheté","Aussi appelé poulpe de récif caraïbe, on ne rencontre ce poulpe que la nuit. Il se distingue des autres espèces de poulpes avec son anneau brun foncé autour des yeux.", "octolist/images/caraibes.jpg"],

["Poulpe de récif","Octopus Cyanea","Mer Rouge et Indo-Pacifique", "40 à 140cm", "rouge, marron, violet", "Aussi appelé pieuvre diurne, on le retrouvera dans les récifs de corail. Il est surtout observé pendant la période des amours.","octolist/images/récif.jpg"],

["Pieuvre mimétique", "Thaumoctopus mimicus","Malaisie et Indonésie","60 à 100cm","zébré rouge et blanc", "La pieuvre mimétique est la seule espèce connue à se faire passer pour un autre animal. Elle peut ainsi se camoufler en méduse, en sole, en anémone, en crevette, en étoile de mer ou encore en murène","octolist/images/mimétique.jpg"],

["Pieuvre géante du Pacifique","Enteroctopus dofleini","Pacifique Nord","9m","Rouge","Ces pieuvres vieillissent de façon très semblable aux humains, leur système immunitaire devient inopérant, elles deviennent séniles et ne peuvrent plus se nourrir.","octolist/images/géante.jpg"],

["Poulpe tacheté","Callistoctopus macropus","Mers tempérées et chaudes, Atlantique, Indo-Pacifique","80 à 150cm", "marron rougeâtre avec des tâches blanches","Cette espèce peut se nourrir d'autre poulpe","octolist/images/tacheté.jpg"],

];

let listOcto = {};
listOcto = tabtoObject(dbOcto);
const keyocto = Object.keys(listOcto);
const subkey = dbOcto[0];

//construit sur la page HTML, la liste des popup
for(let i = 0; i<keyocto.length;i++){
  document.getElementById("popup-list").innerHTML+=
  `<div class="popup" onclick="popUpZoom('${keyocto[i]}')">
  <img width="400" height="200" style="border-radius: 2px;" id="img${keyocto[i]}">
  <span class="popuptext" id="pop-pup-${keyocto[i]}"></span>
  </div>`;
  document.getElementById(`pop-pup-${keyocto[i]}`).style="height: 5px;width: 5px;right:0px";
  //rajoute l'image
  document.getElementById(`img${keyocto[i]}`).src = listOcto[`${keyocto[i]}`][`img_src`];
};

//convertir un tab 2d en un objet js, ressemblant a une table sql, avec id comme clé primaire et des noms de colones
function tabtoObject(tab){
  if(!Array.isArray(tab))
  {return;}
  if(tab.length<=1)
  {return;}
  const header = tab[0];
  let obj = {};
  for(let i = 1;i<tab.length; i++){
    obj[`id${i}`] = {};
    for(let j = 0; j<header.length; j++){
      obj[`id${i}`][`${header[j]}`]=tab[i][j];
    };
  };
  return obj;
};

//tabtoobject va transformer le tab sous un objet de cette forme
//listOcto = {
  //id1 : {
  //  nom : "test",
  //  nom scientifique : "testum",
  //  couleur : "rouge"
  //},
  //...
//};