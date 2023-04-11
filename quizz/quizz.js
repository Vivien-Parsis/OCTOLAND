let currentquestion = 0;
let bonneReponse = 0;


function quizz() 
{
  if (currentquestion > 0) 
  { 
    let x = 0;
    for(let i = 1; i<=nombreMaxReponse; i++)
    {
      if(document.getElementById(`Answer${i}`).checked)
      {
        x=i;
        break;
      }
    }
    if(x==0)
    {
      alert("Veuillez choisir une réponse !");
      return;
    }
    if(question[`question${currentquestion}`][`reponse`][`a${x}`][`isright`])
    {
      bonneReponse += 1;
      alert("Bonne réponse !");
    }
    else
    {
      alert("Mauvaise réponse !");
    }
  }
   
  currentquestion += 1;
  //creer la page des questions
  if (currentquestion == 1) 
  {
    document.getElementById("titre").innerHTML = `Question : ${currentquestion}/10`; 
    let ListeRadioHTML = "";
    for(let i = 1; i<=nombreMaxReponse; i++)
      {
        ListeRadioHTML += `<input type="radio" name="answer" id ="Answer${i}">
        <label for="Answer${i}" id="A${i}">${question[`question1`][`reponse`][`a${i}`][`value`]}</label>
        <br>`;
      }
    document.getElementById("p").innerHTML =
      `<span id="question">${question[`question1`][`question`]} </span>
        <br><br>
        ${ListeRadioHTML}
        <br>
        <span id="score">score : 0/10</span>
        <br><br>
        <script src="quizz.js"></script>
        <button onclick="quizz()">Valider</button>
        <br><br>
        <button onclick="reset()">Recommencer</button>`;
  }
  
  if (currentquestion > 1 && currentquestion < nombreQuestion+1) 
  {
    //change le titre de la page, la question et actualise le score
    document.getElementById("question").innerHTML = question[`question${currentquestion}`][`question`];
    document.getElementById("score").innerHTML = `score : ${bonneReponse}/10`;
    document.getElementById("titre").innerHTML = `Question : ${currentquestion}/10`;
    //change les reponses
    for(let i = 1; i<=nombreMaxReponse; i++)
    {
      document.getElementById(`Answer${i}`).checked = false;
      document.getElementById(`A${i}`).innerHTML = question[`question${currentquestion}`][`reponse`][`a${i}`][`value`];
      //desactive ou non les bouttons reponses
      if(question[`question${currentquestion}`][`reponse`][`a${i}`][`value`]=="")
      {
        document.getElementById(`Answer${i}`).style.display = "none";
        document.getElementById(`Answer${i}`).disabled = true;
      }
      else
      {
        document.getElementById(`Answer${i}`).style.display = "inline";
        document.getElementById(`Answer${i}`).disabled = false;
      }
    } 
  }

  //création page de fin de quizz    
  if (currentquestion == nombreQuestion+1) 
  {
    document.getElementById("p").innerHTML = `<br><br>`;
    document.getElementById("titre").innerHTML = `Resultat`;
    if (bonneReponse == 0) {
      document.getElementById("p").innerHTML += `<span id="lose">Vous n'avez trouvé aucune réponse !!</span><br><br>`;
    }
    if (bonneReponse == 1) {
      document.getElementById("p").innerHTML += `<span id="result">Vous avez trouvé 1 bonne réponse sur 10.</span><br><br>`;
    }
    if (bonneReponse > 1 && bonneReponse < nombreQuestion) {
      document.getElementById("p").innerHTML += `<span id="result">Vous avez trouvé ${bonneReponse} bonnes réponses sur 10 !</span><br><br>`;
    }
    if(bonneReponse == nombreQuestion){
       document.getElementById("p").innerHTML += `<span id="win">Fécilitation, vous avez trouvé toute les bonnes réponses !</span><br><br>`;
    }
    document.getElementById("p").innerHTML += `<br><br><button id="buttonreset" onclick="reset()">Recommencer</button>`;
  }
}

function reset() 
{  
  bonneReponse = 0;
  currentquestion = 0;
  document.getElementById("titre").innerHTML = `Test`;
  document.getElementById("p").innerHTML = 
    `<br><br>
     <strong>C'EST L'HEURE DU TEST !</strong>
     <br>
     Trouver un maximum de bonne réponse en 10 questions. Toutes les réponses sont trouvable dans les différentes rubriques du site. Bon quizz !!
     <br><br><br>
     <button onclick="quizz()">Commencer</button>  
     <br><br><br><br>`;
}

const question =
{
  question1: {
    question: "Combien de coeurs et de cerveaux possède le poulpe ?",
    reponse:
    {
      a1: {
        isright: false,
        value: "1 coeur, 3 cerveaux",
      },
      a2: {
        isright: false,
        value: "3 coeurs, 8 cerveaux",
      },
      a3: {
        isright: false,
        value: "8 coeurs, 8 cerveaux",
      },
      a4: {
        isright: true,
        value: "3 coeurs, 9 cerveaux",
      }
    }
  },
  question2: {
    question: "Quel est le temps d'incubation chez le poulpe ?",
    reponse: {
      a1: {
        isright: true,
        value: "Cela dépend de la température de l'eau",
      },
      a2: {
        isright: false,
        value: "Une semaine",
      },
      a3: {
        isright: false,
        value: "Un mois",
      },
      a4: {
        isright: false,
        value: "Un an",
      }
    }
  },
  question3: {
    question: "Comment s’appelle le poulpe qui faisait sauter les plombs de son aquarium en Allemagne ?",
    reponse: {
      a1: {
        isright: false,
        value: "Frank",
      },
      a2: {
        isright: true,
        value: "Otto",
      },
      a3: {
        isright: false,
        value: "Inky",
      },
      a4: {
        isright: false,
        value: "Heimrich",
      }
    }
  },
  question4: {
    question: "De quelle mythologie vient le Kraken ?",
    reponse: {
      a1: {
        isright: true,
        value: "Nordique",
      },
      a2: {
        isright: false,
        value: "Grecque",
      },
      a3: {
        isright: false,
        value: "Japonaise",
      },
      a4: {
        isright: false,
        value: "Néo-zélandaise",
      }
    }
  },
  question5: {
    question: "Quelle est le nom de la pieuvre qui arrive à se déguiser en serpents de mer ou en rascasse volante ?",
    reponse: {
      a1: {
        isright: false,
        value: "La pieuvre caméléon",
      },
      a2: {
        isright: true,
        value: "La pieuvre mimétique",
      },
      a3: {
        isright: false,
        value: "La pieuvre imitatrice",
      },
      a4: {
        isright: false,
        value: "La pieuvre singe",
      }
    }
  },
  question6: {
    question: "Quel âge possède notre dernier ancêtre commun avec le poulpe, c’est-à-dire l’apparition des mollusques ?",
    reponse: {
      a1: {
        isright: false,
        value: "2,5 milliard d'années",
      },
      a2: {
        isright: true,
        value: "518 million d'années",
      },
      a3: {
        isright: false,
        value: "62 million d'années",
      },
      a4: {
        isright: false,
        value: "47 mille ans",
      }
    }
  },
  question7: {
    question: "Vrai ou faux, le poulpe mue ?",
    reponse: {
      a1: {  
        isright: true,
        value: "Vrai",
      },
      a2: {
        isright: false,
        value: "Faux",
      },
      a3: {
        isright: false,
        value: "",
      },
      a4: {
        isright: false,
        value: "",
      }
    }
  },
  question8: {
    question: "Qui a instauré le mot pieuvre dans le langage courant ?",
    reponse: {
      a1: {
        isright: false,
        value: "Jules Verne",
      },
      a2: {
        isright: true,
        value: "Victor Hugo",
      },
      a3: {
        isright: false,
        value: "Aristote",
      },
      a4: {
        isright: false,
        value: "Molière",
      }
    }
  },
  question9: {
    question: "Combien pèse le calamar colossal",
    reponse: {
      a1: {
        isright: false,
        value: "80kg",
      },
      a2: {
        isright: false,
        value: "150kg",
      },
      a3: {
        isright: true,
        value: "400kg",
      },
      a4: {
        isright: false,
        value: "930kg",
      }
    }
  },
  question10: {
    question: "Quel pigment donne sa couleur bleue au sang de la pieuvre ?",
    reponse: {
      a1: {
        isright: false,
        value: "L'hémoglobine",
      },
      a2: {
        isright: false,
        value: "L'hémérythrine",
      },
      a3: {
        isright: false,
        value: "La biliverdine",
      },
      a4: {
        isright: true,
        value: "L'hémocyanine",
      }
    }
  }
};
console.log(question);
const nombreQuestion = Object.keys(question).length;
const nombreMaxReponse = Object.keys(question[Object.keys(question)[0]]["reponse"]).length;