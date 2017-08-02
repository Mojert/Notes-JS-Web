// Liste des journaux
var journaux = ["http://lemonde.fr", "http://lefigaro.fr", "http://liberation.fr"];

var listeElt = document.createElement("ul");
listeElt.id = "journaux";
for (var i = 0; i < journaux.length; i++) {
    var liElt = document.createElement("li");
    var aElt = document.createElement("a");
    aElt.href = journaux[i];
    aElt.textContent = journaux[i];
    liElt.appendChild(aElt);
    listeElt.appendChild(liElt);
}
document.getElementById("contenu").appendChild(listeElt);
