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

// Annimation
var cadreElt = document.getElementById("cadre");
var blocElt = document.getElementById("bloc");
// Conversion en nombre du diamètre du bloc (valeur de la forme 25px)
var diametreBloc = parseFloat(getComputedStyle(blocElt).width);
var vitesse = 7;
var animationID = null;

// Déplace le bloc
function deplacerBloc() {
    var xBloc = parseFloat(getComputedStyle(blocElt).left);
    var xMax = parseFloat(getComputedStyle(cadreElt).width);
    var nouveauX = xBloc + vitesse;
    if (nouveauX + diametreBloc <= xMax) {
        // Déplacement du bloc
        blocElt.style.left = nouveauX + "px";
        // Demande au navigateur d'appeller deplacerBloc dès que possible
        animationID = requestAnimationFrame(deplacerBloc);
    } else {
        blocElt.style.left = (xMax - diametreBloc) + "px"; // On s'assure que le bloc est à sa place
        // Annulation de l'animation
        cancelAnimationFrame(animationID);
    }
}

animationID = requestAnimationFrame(deplacerBloc); // Début de l'animation
