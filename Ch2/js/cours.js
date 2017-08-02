// Sélection selon la balise
// .getElementsByTagName() renvoie tous les enfants (et sous-enfants, et sous-sous....) qui ont le tagName spécifié
var titresElts = document.getElementsByTagName("h2"); // Tous les titres h2
console.log(titresElts[0]); // affiche le premier titre h2
console.log(titresElts.length); // affiche 3

// Sélection selon la classe
var merveillesElts = document.getElementsByClassName("merveilles");
for (var i = 0; i < merveillesElts.length; i++)
    console.log(merveillesElts[i]);

// Sélection selon l'identifiant (ID)
console.log(document.getElementById("nouvelles"));

// Sélection selon un sélecteur CSS
var merveillesAntiquesExistantesElts = document.querySelectorAll("#antiques .existe");
console.log(merveillesAntiquesExistantesElts.length, merveillesAntiquesExistantesElts[0]);
// .querySelector() marche de la même façon sauf qu'elle va renvoyer le tout premier élément qu'elle a trouvé

console.log(document.getElementById("contenu").innerHTML); // Permet d'obtenir l'HTML contenu dans le noeud

console.log(document.getElementById("contenu").innerText); // Permet d'obtenir le texte contenu dans le noeud

console.log(document.querySelector("a").getAttribute("href")); // Permet d'obtenir la valeur d'un attribut
// Certains sont directement disponibles comme propriétés
console.log(document.querySelector("ul").id);
console.log(document.querySelector("a").href);

if (document.querySelector("a").hasAttribute("target"))
    console.log("Le premier lien possède l'attribut \"target\"");
else
    console.log("Le premier lien ne possède pas l'attribut \"target\"");

// Rappel : un élément peut avoir plusieur classe
var classes = document.getElementById("antiques").classList; // Permet d'envoyer une liste des classes
console.log(classes.length); // Affiche 1 => ne possède qu'un seul élément
console.log(classes[0]);

if (document.getElementById("antiques").classList.contains("merveille"))
    console.log("L'élément identifié par \"antiques\" possède la classe merveille");
else
    console.log("L'élément identifié par \"antiques\" ne possède pas la classe merveille")
