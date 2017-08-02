// Liste des questions à afficher. Une question est définie par son énoncé et sa réponse
var questions = [
    {
        enonce: "Combien font 2+2 ?",
        reponse: "2+2 = 4"
    },
    {
        enonce: "En quelle année Christophe Colomb a-t-il découvert l'Amérique ?",
        reponse: "1492"
    },
    {
        enonce: "On me trouve 2 fois dans l'année, 1 fois dans la semaine, mais pas du tout dans le jour... Qui suis-je ?",
        reponse: "La lettre N"
    }
];


var listeElt = document.createElement("dl");
var i = 1;
questions.forEach((question) => {
    var termeElt = document.createElement("dt");
    var strongElt = document.createElement("strong");
    strongElt.textContent = "Question " + i + " : ";
    termeElt.appendChild(strongElt);
    var emElt = document.createElement("em");
    emElt.textContent = question.enonce;
    termeElt.appendChild(emElt);
    listeElt.appendChild(termeElt);

    var defElt = document.createElement("dd");
    var boutonElt = document.createElement("button");
    boutonElt.textContent = "Afficher la réponse";
    boutonElt.addEventListener("click", (e) => {
        // Remplace le bouton par la réponse
        e.target.parentElement.replaceChild(document.createTextNode(question.reponse), e.target);
    });
    defElt.appendChild(boutonElt);
    listeElt.appendChild(defElt);
});

document.getElementById("contenu").appendChild(listeElt)
