// ACTIVITE 1


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


// ACTIVITE 2

// FONCTION AJOUTER OBJET LIEN DANS LA LISTE
function nouveauLien (titre, url, auteur) {
    
    var noueauLien = {
    titre: titre,
    url: url,
    auteur: auteur
    }
    
    listeLiens.unshift(noueauLien);
}

// FONCTION AJOUTER FORMULAIRE
function ajouterFormulaire () {
    
    
    // CREATION DES ELEMENTS
    var form = document.createElement("form");
    
    // AUTEUR
    var auteurForm = document.createElement("input");
    auteurForm.setAttribute("placeholder", "Entrez votre nom");
    auteurForm.setAttribute("style", "width: 150px");
    auteurForm.setAttribute("id", "auteurForm");
    document.getElementById("formulaire").insertBefore(auteurForm, document.getElementById("ajouterLien"));
    
    // TITRE
    var titreForm = document.createElement("input");
    titreForm.setAttribute("placeholder", "Entrez le titre du lien");
    titreForm.setAttribute("style", "width: 300px");
    document.getElementById("formulaire").insertBefore(titreForm, document.getElementById("ajouterLien"));
    
    // URL
    var urlForm = document.createElement("input");
    urlForm.setAttribute("placeholder", "Entrez l'url du lien");
    urlForm.setAttribute("style", "width: 300px");
    document.getElementById("formulaire").insertBefore(urlForm, document.getElementById("ajouterLien"));
    
    // CHANGEMENT TEXTE BOUTON
    var boutonForm = document.getElementById("ajouterLien");
    boutonForm.id = "ajouter";
    console.log(boutonForm.id);
    boutonForm.textContent = "Ajouter";
}

function afficher (auteur) {
    console.log(auteur);
    nouveauLien("t", "u", "r");
}

function ajouterLien () {
    
    var auteur = document.getElementById("auteurForm");
    auteur.addEventListener("input", function (e) {
        var nouveauAuteur = e.target.value;
        afficher(nouveauAuteur);
    })
}

// EVENEMENT AFFICHER FORMULAIRE

var ajouterElt = document.getElementById("ajouterLien");

ajouterElt.addEventListener("click", function () {
    
    //document.getElementById("formulaire").innerHTML = "";
    ajouterFormulaire();
})


// EVENEMENT AJOUTER LIEN




// ACTIVITE 1


// Crée et renvoie un élément DOM affichant les données d'un lien
// Le paramètre lien est un objet JS représentant un lien
function creerElementLien(lien) {
    var titreLien = document.createElement("a");
    titreLien.href = lien.url;
    titreLien.style.color = "#428bca";
    titreLien.style.textDecoration = "none";
    titreLien.style.marginRight = "5px";
    titreLien.appendChild(document.createTextNode(lien.titre));

    var urlLien = document.createElement("span");
    urlLien.appendChild(document.createTextNode(lien.url));

    // Cette ligne contient le titre et l'URL du lien
    var ligneTitre = document.createElement("h4");
    ligneTitre.style.margin = "0px";
    ligneTitre.appendChild(titreLien);
    ligneTitre.appendChild(urlLien);

    // Cette ligne contient l'auteur
    var ligneDetails = document.createElement("span");
    ligneDetails.appendChild(document.createTextNode("Ajouté par " + lien.auteur));

    var divLien = document.createElement("div");
    divLien.classList.add("lien");
    divLien.appendChild(ligneTitre);
    divLien.appendChild(ligneDetails);

    return divLien;
}

var contenu = document.getElementById("contenu");
// Parcours de la liste des liens et ajout d'un élément au DOM pour chaque lien
listeLiens.forEach(function (lien) {
    var elementLien = creerElementLien(lien);
    contenu.appendChild(elementLien);
});


















