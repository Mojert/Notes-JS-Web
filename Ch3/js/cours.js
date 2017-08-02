// Modification du contenu HTML de la liste : ajout d'un langage
document.getElementById("langages").innerHTML += '<li id="c">C</li>';
// innerHTML est une propriété en lecture et écriture

// InnerHTML est la plus part du temps utiliser pour vider plutot que pour ajouter car c'est relou à écrire
// document.getElementById("langages").innerHTML = "";

var titreElt = document.querySelector("h1");

// Modification du contenu textuel du premier titre
titreElt.textContent += " de programmation";

// Définition de l'attribut "id" du premier titre
titreElt.setAttribute("id", "titre");

// Équivalent à (il faut que l'attribut existe sous la forme de propriété, ce qui est le cas de id par exemple)
// titreElt.id = "titre";

titreElt.classList.remove("debut"); // Supprime la classe "debut"
titreElt.classList.add("titre"); // Ajoute la classe "titre"

console.log(titreElt);

/*
 * De manière générale, l'ajout d'un nouvelle élément se fait en 3 temps.
 * 1) Création de l'élément
 * 2) Définition des informations de l'élément
 * 3) Insertion du nouvelle élément dans le DOM
 */

// 1) Création de l'élément
var pythonElt = document.createElement("li");
// 2) Définition des informations de l'élément
pythonElt.id = "python";
pythonElt.textContent = "Python";
// 3) Insertion du nouvelle élément dans le DOM
document.getElementById("langages").appendChild(pythonElt); // Insertion de l'élément à la fin

// Variante
var rubyElt = document.createElement("li");
rubyElt.id = "Ruby";
rubyElt.appendChild(document.createTextNode("Ruby")); // La différence est qu'ici on crée un noeud textuel qu'on ajoute à l'élément plutôt que de simplement modifier le texte
document.getElementById("langages").appendChild(rubyElt);

// Il est possible d'ajouter un noeud n'importe où
var perlElt = document.createElement("li");
perlElt.id = "perl";
perlElt.textContent = "Perl";
document.getElementById("langages").insertBefore(perlElt, document.getElementById("php"));

// Variante
document.getElementById("langages").insertAdjacentHTML("afterbegin", '<li id="javascript">Javascript</li>');
/*
    Différentes positions:

    beforebegin: avant l'élément existant lui-même.

    afterbegin: juste à l'intérieur de l'élément existant, avant son premier enfant.

    beforeend: juste à l'intérieur de l'élément existant, après son dernier enfant.

    afterend: après l'élément existant lui-même.
*/

// Remplacement d'un élément
var bashElt = document.createElement("li");
bashElt.id = "bash";
bashElt.textContent = "Bash";
document.getElementById("langages").replaceChild(bashElt, perlElt);

// Suppression d'un élément
document.getElementById("langages").removeChild(bashElt);

// Exercice
// Méthode 1
// document.body.insertAdjacentHTML("beforeend", '<p>Voici une <a href="https://fr.wikipedia.org/wiki/Liste_des_langages_de_programmation">liste</a> plus complète.</p>');
// Méthode 2
var pElt = document.createElement("p");
var lienElt = document.createElement("a");
lienElt.href = "https://fr.wikipedia.org/wiki/Liste_des_langages_de_programmation"
lienElt.textContent = "liste";
pElt.appendChild(document.createTextNode("Voici une "));
pElt.appendChild(lienElt);
pElt.appendChild(document.createTextNode(" plus complète."));
document.getElementById("contenu").appendChild(pElt);
