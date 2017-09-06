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
    document.getElementById("formulaire").appendChild(auteurForm);

    // TITRE
    var titreForm = document.createElement("input");
    titreForm.setAttribute("placeholder", "Entrez le titre du lien");
    titreForm.setAttribute("style", "width: 300px");
    document.getElementById("formulaire").appendChild(titreForm);
    
    // URL
    var urlForm = document.createElement("input");
    urlForm.setAttribute("placeholder", "Entrez l'url du lien");
    urlForm.setAttribute("style", "width: 300px");
    document.getElementById("formulaire").appendChild(urlForm);
    
    // BOUTON
    var boutonForm = document.createElement("button");
    boutonForm.textContent = "Ajouter";
    boutonForm.setAttribute("style", "width: 100px");
    boutonForm.setAttribute("id", "ajouterLien");
    document.getElementById("formulaire").appendChild(boutonForm);
}

function ajouterLien () {
    
    var auteur = document.getElementById("auteurForm");
    auteur.addEventListener("input", function (e) {
        var nouveauAuteur = e.target.value;
        afficher(nouveauAuteur);
    })
}

// EVENEMENT AFFICHER FORMULAIRE

function afficher () {
    console.log("ok");
}

var ajouterElt = document.getElementById("ajouterLien");
var x = false;

ajouterElt.addEventListener("click", function () {
    
    console.log(x);
    
    switch (x) {
        case false:
            document.getElementById("formulaire").innerHTML = "";
            ajouterFormulaire();
            x = true;
            console.log(x);
            break;
        case true:
            document.getElementById("formulaire").innerHTML = "";
            afficher();
            x = false;
            console.log(x);
            break;
    }
})

// EVENEMENT AJOUTER LIEN
/*
var validerElt = document.getElementById("valider");

validerElt.addEventListener("click", function () {
    
    document.getElementById("formulaire").innerHTML = "";
    console.log("ok");
})
*/

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


















