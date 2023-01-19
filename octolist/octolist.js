function popUp(id=0)
{
  const alreadyzoom = document.getElementById(`pop-pup-${id}`).style.visibility=="visible";
  for(let i = 0; i<keyocto.length;i++)
  {
    if(keyocto[i]!=id || document.getElementById(`pop-pup-${id}`).style.visibility=="visible"){
      document.getElementById(`pop-pup-${keyocto[i]}`).style.visibility="hidden";
      document.getElementById(`img${keyocto[i]}`).width="400";
      document.getElementById(`img${keyocto[i]}`).height="200";
      if(!alreadyzoom)
      {document.getElementById(`img${keyocto[i]}`).style.opacity="0.1";}
      else
      {document.getElementById(`img${keyocto[i]}`).style.opacity="1";}
    }
    else{
      document.getElementById(`pop-pup-${id}`).style.visibility="visible";
      document.getElementById(`img${keyocto[i]}`).width="800";
      document.getElementById(`img${keyocto[i]}`).height="400";
      document.getElementById(`img${keyocto[i]}`).style.opacity="1";
    }         
  }
}

dbOcto = [
  ["nom","nom scientifique","couleur","img_src"], 
  ["Pieuvre blanche","Eledone cirrhosa","jaune,orange,rouge","octolist/images/Pieuvre-blanche.jpg"],
  ["Poulpe boréal","Bathypolypus arcticus","brun-rose","octolist/images/poulpe-boreal.jpg"],
  ["pieuvre commune","Octopus vulgaris","homochromie","octolist/images/pieuvre-commune.jpg"],
  ["Pieuvre aux anneaux bleus","Hapalochlaena maculosa","homochromie, anneaux bleus","octolist/images/Pieuvre-aux-anneaux-bleus.jpg"]
];

let listOcto = {};
listOcto = tabtoObject(dbOcto);
const keyocto = Object.keys(listOcto);
const subkey = dbOcto[0];
//tabtoobject va transformer le tab sous un objet de cette forme
//listOcto = {
  //id1 : {
  //  nom : "test",
  //  nom scientifique : "testum",
  //  couleur : "rouge"
  //},
  //...
//};

//construit sur la page HTML, la liste des popup
for(let i = 0; i<keyocto.length;i++)
  {
    document.getElementById("popup-list").innerHTML+=
    `<div class="popup" onclick="popUp('${keyocto[i]}')"><img  width="400" height="200"  id="img${keyocto[i]}">
    <span class="popuptext" id="pop-pup-${keyocto[i]}"></span>
    </div>`;
    //rajoute les information et l'image
    for(let j = 0; j<subkey.length;j++)
    {
      if(subkey[j]=="img_src")
      {
        document.getElementById(`img${keyocto[i]}`).src = listOcto[`${keyocto[i]}`][`${subkey[j]}`];
        continue;
      }
      document.getElementById(`pop-pup-${keyocto[i]}`).innerHTML += `${subkey[j]} : ${listOcto[`${keyocto[i]}`][`${subkey[j]}`]}<br>`;
    }
  };

function tabtoObject(tab){
  const header = tab[0];
  let obj = {};
  for(let i = 1;i<tab.length; i++)
  {
    obj[`id${i}`] = {};
    for(let j = 0; j<header.length; j++)
    {
      obj[`id${i}`][`${header[j]}`]=tab[i][j];
    }
  }
  return obj;
};

//document.addEventListener("dblclick",popUp());