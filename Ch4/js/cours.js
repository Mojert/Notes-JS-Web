// Chaque élément possède une propriété style
var pElt = document.querySelector("p");
pElt.style.color = "red";
pElt.style.margin = "50px";
pElt.style.fontFamily = "Arial";
pElt.style.backgroundColor = "black";

// Accéder au style d'un élément
var paragraphesElts = document.getElementsByTagName("p");
for (var i = 0; i < paragraphesElts.length; i++)
    console.log(paragraphesElts[i].style.color);

console.log();
// Le problème de la propriété style est qu'elle ne prend en compte que le style définit dans l'HTML (et généré par le JS), i.e. pas ce qui a été définit dans un fichier css
for (var i = 0; i < paragraphesElts.length; i++)
    console.log(getComputedStyle(paragraphesElts[i]));

for (var i = 0; i < paragraphesElts.length; i++)
    console.log(getComputedStyle(paragraphesElts[i]).color);
