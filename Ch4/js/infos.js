var h = getComputedStyle(document.getElementById("contenu")).height;
var l = getComputedStyle(document.getElementById("contenu")).width;

// liste
var ulElt = document.createElement("ul");
var hElt = document.createElement("li");
hElt.textContent = "Hauteur : " + h;
var lElt = document.createElement("li");
lElt.textContent = "Longueur : " + l;
ulElt.appendChild(hElt);
ulElt.appendChild(lElt);

//div
document.getElementById("infos").appendChild(document.createTextNode("Informations sur l'élément"));
document.getElementById("infos").appendChild(ulElt);
