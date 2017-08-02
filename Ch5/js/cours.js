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
