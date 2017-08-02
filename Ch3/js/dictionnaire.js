// Liste des mots du dictionnaire
var mots = [
    {
        terme: "Procrastination",
        definition: "Tendance pathologique à remettre systématiquement au lendemain"
    },
    {
        terme: "Tautologie",
        definition: "Phrase dont la formulation ne peut être que vraie"
    },
    {
        terme: "Oxymore",
        definition: "Figure de style qui réunit dans un même syntagme deux termes sémantiquement opposés"
    }
];

// TODO : créer le dictionnaire sur la page web, dans la div "contenu"
var listeElt = document.createElement("dl");
// for (var i = 0; i < mots.length; i++) {
//     var dtElt = document.createElement("dt");
//     dtElt.innerHTML = "<strong>" + mots[i].terme + "</strong>";
//     var ddElt = document.createElement("dd");
//     ddElt.textContent = mots[i].definition;
//     listeElt.appendChild(dtElt);
//     listeElt.appendChild(ddElt);
// }
// document.getElementById("contenu").appendChild(listeElt);

// Équivalent
mots.forEach((mot) => {
    var dtElt = document.createElement("dt");
    dtElt.innerHTML = "<strong>" + mot.terme + "</strong>";
    var ddElt = document.createElement("dd");
    ddElt.textContent = mot.definition;
    listeElt.appendChild(dtElt);
    listeElt.appendChild(ddElt);
});
document.getElementById("contenu").appendChild(listeElt);
