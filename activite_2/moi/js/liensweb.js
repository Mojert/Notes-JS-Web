/* 
Activité 1
*/

// Liste des liens Web à afficher. Un lien est défini par :
// - son titre
// - son URL
// - son auteur (la personne qui l'a publié)
var listeLiens = [
    {
        titre: "So Foot",
        url: "http://sofoot.com",
        auteur: "yann.usaille"
    },
    {
        titre: "Guide d'autodéfense numérique",
        url: "http://guide.boum.org",
        auteur: "paulochon"
    },
    {
        titre: "L'encyclopédie en ligne Wikipedia",
        url: "http://Wikipedia.org",
        auteur: "annie.zette"
    }
];

// Création de la liste
var listeElt = document.getElementById("liens");

// On crée un élément "div" pour chaque lien
listeLiens.forEach((lien) => {
    var divElt = document.createElement("div");
    divElt.classList.add("lien");
    // Titre
    var aElt = document.createElement("a");
    aElt.href = lien.url;
    aElt.textContent = lien.titre;
    aElt.style.color = "#428bca";
    aElt.style.fontFamily = "Arial";
    aElt.style.fontWeight = "bold";
    aElt.style.textDecoration = "none";

    divElt.appendChild(aElt);
    // Lien
    var lienElt = document.createElement("span");
    lienElt.style.marginLeft = "10px";
    lienElt.textContent = lien.url;
    divElt.appendChild(lienElt);
    // Auteur
    divElt.appendChild(document.createElement("br"));
    var auteurElt = document.createElement("span");
    auteurElt.textContent = "Ajouté par " + lien.auteur;
    divElt.appendChild(auteurElt);

    listeElt.appendChild(divElt);
});
