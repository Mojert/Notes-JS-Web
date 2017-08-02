// On peut accéder à la racine du DOM en utilisant la variable document
// La variable document correspond à la balise <html>

var h = document.head;
console.log(h);

var b = document.body;
console.log(b);

if (document.body.nodeType === document.ELEMENT_NODE)
    console.log("Body est un noeud élément");// Noeud élément = balise html
else
    console.log("Body est un noeud textuel");

for (var i = 0; i < document.body.childNodes.length; i++)
    console.log(document.body.childNodes[i]); // Permet d'accéder à tous les enfants d'un noeud
// /!\ Il existe des "noeuds vides". Il s'agit de noeuds textuelles ne contenant que un retour à la ligne

var h1 = document.body.childNodes[1];
console.log(h1.parentNode); // affiche body

console.log(document.parentNode); // affiche null car <html> n'a pas de parent


