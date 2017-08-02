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
// On peut aussi retirer la fonction qui gère l'événement à condition qu'on ait pas ajouter une fonction anonyme
boutonElt.removeEventListener("click", clic);
