function clic() {
    console.log("Clic !");
}

var boutonElt = document.getElementById("bouton");
// Ajout d'un gestionnaire pour l'événement click
boutonElt.addEventListener("click", clic);

// Il est aussi possible d'utiliser une fonction anonyme
// boutonElt.addEventListener("click", () => { // ou function () {corps de la fonction;}
//     console.log("Clic !");
// });
// On peut aussi retirer la fonction qui gère l'événement à condition qu'on n'ait pas ajouter une fonction anonyme
boutonElt.removeEventListener("click", clic);

/* Principales familles d'événements :
 * Événements clavier : Appui ou relâchement d'une touche du clavier
 * Événements souris : Clic avec les différents boutons, appui ou relâchement d'un bouton de la souris, survol d'une zone avec la souris
 * Événements fenêtre : Chargement ou fermeture de la page, redimensionnement, défilement (scrolling)
 * Événements formulaire : Changement de cible de saisie (focus), envoi d'un formulaire
 */

boutonElt.addEventListener("click", (e) => { // e : Objet de classe Event qui nous permet d'obtenir des informations sur l'événement
    console.log("Événement : " + e.type + ", clible :", e.target);
});

// Gestion des événements les plus courants

// Gestion de l'appui sur une touche du clavier produisant un caractère
document.addEventListener("keypress", (e) => {
    console.log("Vous avez appuyé sur la touche " + String.fromCharCode(e.charCode));
});

function infosClavier(e) {
    console.log("Événement clavier : " + e.type + ", touche : " + e.keyCode);
}
// Gestion de l'appui et du relâchement d'une touche du clavier
document.addEventListener("keydown", infosClavier);
document.addEventListener("keyup", infosClavier);
// Ordre : keydown -> keypress -> keyup

// Renvoie le nom du bouton souris à partir de son code
function getBoutonSouris(code) {
    var bouton = "inconnu";
    switch (code) {
    case 0:
        bouton = "gauche";
        break;
    case 1:
        bouton = "millieu";
        break;
    case 2:
        bouton = "droite";
        break;
    }
    return bouton;
}

function infosSouris(e) {
    console.log("Événement souris : " + e.type + ", bouton " + getBoutonSouris(e.button) + ", X : " + e.clientX + ", Y : " + e.clientY); // ClientX/Y : Coordonnés par rapport à ce que voit le client. pageX/Y Coordonés par rapport à la page dans sa globalitée
}
// Gestion du clic souris
document.addEventListener("click", infosSouris);
// Gestion de l'appui et du relâchement des boutons de la souris
document.addEventListener("mousedown", infosSouris);
document.addEventListener("mouseup", infosSouris);
// Ordre mousedown -> mouseup -> click

// Gestion de la fin du chargement de la page web
window.addEventListener("load", () => {
    console.log("Page entièrement chargée");
});
// Gestion de la fermeture de la page web
window.addEventListener("beforeunload", (e) => {
    var message = "On est bien ici !";
    e.returnValue = message; // Provoque une demande de confirmation (standard)
    return message; // Provoque une demande de confirmation (cerains navigateurs)
    // En utilisant les 2 méthodes, on est sûr que ça va être prit en compte
    // Sur Firefox, ça s'affiche uniquement si c'est une action qu'on a fait sur la page qui nous fait la quitter
})

// Les événements se propagent de l'enfant vers les parents, jusqu'à document
document.addEventListener("click", function (e) {
    console.log("Gestionnaire document");
});
document.getElementById("para").addEventListener("click", (e) => {
    console.log("Gestionnaire paragraphe");
});
document.getElementById("propa").addEventListener("click", (e) => {
    console.log("Gestionnaire bouton");
    // e.stopPropagation(); // Permet d'arrêter la propagation
});

// La plupart des événements sont associés à une action par défaut (cliquer sur un lien par ex.)
document.getElementById("interdit").addEventListener("click", (e) => {
    console.log("Continuez à lire le cours plutôt ;)");
    e.preventDefault(); // Empêche l'action par défaut de se produir
})
