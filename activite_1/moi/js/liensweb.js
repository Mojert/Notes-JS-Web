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
var listeElt = document.createElement("ul");
listeElt.style.listStyle = "none";

// On crée un élément "li" pour chaque lien
listeLiens.forEach((lien) => {
    var liElt = document.createElement("li");
    liElt.classList.add("lien");
    // Titre
    var aElt = document.createElement("a");
    aElt.href = lien.url;
    aElt.textContent = lien.titre;
    aElt.style.color = "#428bca";
    aElt.style.fontFamily = "Arial";
    aElt.style.fontWeight = "bold";
    aElt.style.textDecoration = "none";

    liElt.appendChild(aElt);
    // Lien
    var lienElt = document.createElement("span");
    lienElt.textContent = " " + lien.url;
    liElt.appendChild(lienElt);
    // Auteur
    liElt.appendChild(document.createElement("br"));
    var auteurElt = document.createElement("span");
    auteurElt.textContent = "Ajouté par " + lien.auteur;
    liElt.appendChild(auteurElt);

    listeElt.appendChild(liElt);
});

document.getElementById("contenu").appendChild(listeElt);