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

// Prépare un élément div qui contient notre lien
function preparerDiv(lien) {
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

    return divElt;
}

// On crée un élément "div" pour chaque lien
listeLiens.forEach((lien) => {
    var divElt = preparerDiv(lien);

    listeElt.appendChild(divElt);
});

/*
Activité 2
*/

var formulaireElt = document.querySelector("form");
var ajouterElt = document.getElementById("ajouter");

ajouterElt.addEventListener("click", () => {
    ajouterElt.hidden = true;
    ajouterElt.disabled = true;
    formulaireElt.hidden = false;
});

formulaireElt.addEventListener("submit", (e) => {
    // Les éléments du formulaires
    var auteurTextElt = document.getElementById("auteur");
    var titreTextElt = document.getElementById("titre");
    var urlTextElt = document.getElementById("url");

    var auteur = auteurTextElt.value;
    var titre = titreTextElt.value;
    var url = urlTextElt.value;

    // On ajoute s'il le faut le http://
    if (!(url.slice(0, 7) === "http://" || url.slice(0, 8) === "https://"))
        url = "http://" + url;

    // On déclare un objet pour pouvoir utiliser la fonction preparerDiv
    var lien = {
        auteur: auteur,
        titre: titre,
        url: url
    };
    
    var divElt = preparerDiv(lien); // On prépare notre Div qui contient notre lien

    // Et on l'insert
    listeElt.insertAdjacentElement("afterbegin", divElt);

    formulaireElt.hidden = true;
    ajouterElt.disabled = false;
    ajouterElt.hidden = false;

    auteurTextElt.value = "";
    titreTextElt.value = "";
    urlTextElt.value = "";

    // On affiche le message
    var messageElt = document.getElementById("message");
    messageElt.textContent = "Le lien \"" + titre + "\" a bien été ajouté."
    messageElt.hidden = false;
    // Et on le fait disparaître
    setTimeout(() => {
        messageElt.hidden = true;
    }, 2000);

    e.preventDefault();
})