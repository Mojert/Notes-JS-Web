var compteurElt = document.getElementById("compteur");

// Diminue le compteur jusqu'à 0
function diminuerCompteur() {
    var compteur = Number(compteurElt.textContent);
    if (compteur > 1) {
        compteurElt.textContent = compteur - 1;
    } else {
        // Annule l'execution répétée
        clearInterval(intervalID);
        // Modifie le titre de la page
        var titreElt = document.getElementById("titre");
        titreElt.textContent = "BOUM !!!";
        // Modification du titre au bout de 2 secondes
        setTimeout(() => {
            titreElt.textContent = "Tout est cassé :(";
        }, 2000);
    }
}

// setInterval est utilisée pour répéter une action périodiquement
// setTimeout permet d'exécuter une fonction une seule fois après un certain délai

// Apelle la fonction diminuerCompteur toutes les 1000 milisecondes
var intervalID = setInterval(diminuerCompteur, 1000); // La fonction renvoie un nombre servant à identifier l'intervalle
