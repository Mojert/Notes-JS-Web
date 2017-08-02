var couleurTexte = prompt("Couleur du texte :");
var couleurFond = prompt("Couleur du fond :");

var pElts = document.getElementsByTagName("p");
for (var i = 0; i < pElts.length; i++) {
    pElts[i].style.color = couleurTexte;
    pElts[i].style.backgroundColor = couleurFond;
}
