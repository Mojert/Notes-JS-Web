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

function creerElementLien(lien) {
    var titreLien = document.createElement("a");
    titreLien.href = lien.url;
    titreLien.style.color = "#428bca";
    titreLien.style.textDecoration = "none";
    titreLien.style.marginRight = "5px";
    titreLien.appendChild(document.createTextNode(lien.titre));

    var urlLien = document.createElement("span");
    urlLien.appendChild(document.createTextNode(lien.url));

    var ligneTitre = document.createElement("h4");
    ligneTitre.style.margin = "0px";
    ligneTitre.appendChild(titreLien);
    ligneTitre.appendChild(urlLien);

    var ligneDetails = document.createElement("span");
    ligneDetails.appendChild(document.createTextNode("Ajouté par " + lien.auteur));

    var divLien = document.createElement("div");
    divLien.classList.add("lien");
    divLien.appendChild(ligneTitre);
    divLien.appendChild(ligneDetails);

    return divLien;
}

var contenu = document.getElementById("contenu");

listeLiens.forEach(function (lien) {
    var elementLien = creerElementLien(lien);
    contenu.appendChild(elementLien);
});


// ACTIVITE 2


// FONCTION AJOUTER FORMULAIRE

function ajouterFormulaire () {
    
    var formulaire = document.createElement("form");
    formulaire.setAttribute("id", "formulaire");
    document.getElementById("commande").insertBefore(formulaire, document.getElementById("ajouterLien"));
    
    // AUTEUR
    var auteurForm = document.createElement("input");
    auteurForm.setAttribute("placeholder", "Entrez votre nom");
    auteurForm.setAttribute("style", "width: 18%");
    auteurForm.setAttribute("id", "auteurForm");
    auteurForm.setAttribute("class", "formulaire");
    auteurForm.setAttribute("required", "");
    document.getElementById("formulaire").appendChild(auteurForm);
    
    // TITRE
    var titreForm = document.createElement("input");
    titreForm.setAttribute("placeholder", "Entrez le titre du lien");
    titreForm.setAttribute("style", "width: 38%");
    titreForm.setAttribute("id", "titreForm");
    titreForm.setAttribute("class", "formulaire");
    titreForm.setAttribute("required", "");
    document.getElementById("formulaire").appendChild(titreForm);
    
    // URL
    var urlForm = document.createElement("input");
    urlForm.setAttribute("placeholder", "Entrez l'url du lien");
    urlForm.setAttribute("style", "width: 38%");
    urlForm.setAttribute("id", "urlForm");
    urlForm.setAttribute("class", "formulaire");
    urlForm.setAttribute("required", "");
    document.getElementById("formulaire").appendChild(urlForm);
    
    // CHANGEMENT TEXTE BOUTON
    var boutonForm = document.getElementById("ajouterLien");
    boutonForm.textContent = "Ajouter";
    boutonForm.setAttribute("style", "margin-left: 15px")
}

// FONCTION AJOUTER LIEN

function ajouterLien () {
    
    // RECHERCHE VALEUR
    
    var nouveauTitre = document.getElementById("auteurForm").value;
    var nouveauUrl = document.getElementById("titreForm").value;
    var nouveauAuteur = document.getElementById("urlForm").value;
    
    if ((nouveauTitre === "") || (nouveauUrl === "") || (nouveauAuteur === "")) {
        msgErreur();
    } else {
        
        // VERIFICATION ADRESSE

        var testUrl1 = /http:\/\/.+/;
        var testUrl2 = /https:\/\/.+/;
        
        if ((!testUrl1.test(nouveauUrl)) || (!testUrl2.test(nouveauUrl))) {
            nouveauUrl = "http://" + nouveauUrl;
        }   
        
        // CREATION LIEN
        
        var noueauLien = {
        titre: nouveauTitre,
        url: nouveauUrl,
        auteur: nouveauAuteur
        }

        listeLiens.unshift(noueauLien);

        var nouvo = creerElementLien(listeLiens[0]);
        document.getElementById("contenu").insertBefore(nouvo, document.querySelector(".lien"));
        
        msgConfirmation();
        resetCommande();
        etatBouton = !etatBouton;
    }

}

// FONCTION RESET COMMANDE

function resetCommande () {
    document.getElementById("commande").removeChild(document.getElementById("formulaire"));
    var boutonElt = document.getElementById("ajouterLien");
    boutonElt.style.marginLeft = "0px";
    boutonElt.textContent = "Ajouter un lien";
}

// FONCTION MESSAGE CONFIRMATION

function msgConfirmation () {
    var msg = document.createElement("div");
    msg.textContent = ("Le lien " + listeLiens[0].url + " a bien été ajouté.");
    msg.setAttribute("id", "msgConfirmation");
    document.querySelector("body").insertBefore(msg, document.getElementById("commande"));
    
    setTimeout(function () {
        document.querySelector("body").removeChild(document.getElementById("msgConfirmation"));
    }, 2000);
}

// FONCTION MESSAGE ERREUR

function msgErreur () {
    var msg = document.createElement("div");
    msg.textContent = ("Vous devez remplir tous les champs.");
    msg.setAttribute("id", "msgErreur");
    document.querySelector("body").insertBefore(msg, document.getElementById("commande"));
    
    setTimeout(function () {
        document.querySelector("body").removeChild(document.getElementById("msgErreur"));
    }, 2000);
}

// EVENEMENT AFFICHER FORMULAIRE

var ajouterElt = document.getElementById("ajouterLien");
var etatBouton = false;

ajouterElt.addEventListener("click", function () {
        
    if (!etatBouton) {
        
        ajouterFormulaire();        
        etatBouton = !etatBouton;
        
    } else {
        
        ajouterLien();
    }
})