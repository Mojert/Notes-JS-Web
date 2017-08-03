// Accès à la valeur saisie
var pseudoElt = document.getElementById("pseudo");
pseudoElt.value = "MonPseudo";

// Géstion du focus
// Affichage d'un message contextuel pour la saisie du pseudo
pseudoElt.addEventListener("focus", function () {
    document.getElementById("aidePseudo").textContent = "Entrez votre pseudo";
});
// Suppression du message lorsque l'élément pert le focus
pseudoElt.addEventListener("blur", function () {
    document.getElementById("aidePseudo").textContent = "";
});
// Il est possible de chaner le focus de puis le JS. pseudoElt.focus() et .blur()
// C'est exactement le même principe pour les champs à plusieurs lignes (balise <textarea>)

// Les éléments d'options
// Cases à cocher
// L'élément possède une propriété checked. Un événement "change" est envoyé dès que cette valeure est changée par l'utilisateur
document.getElementById("confirmation").addEventListener("change", (e) => {
    console.log("Demande de confirmation : " + e.target.checked);
});
// Boutons radio
// Pour avoir un groupe de boutons radio, il faut qu'ils aient tous le même "name" et qu'ils possèdent des "value" diffèrentes
// Affichage du type d'abonnement choisi
var aboElts = document.getElementsByName("abonnement");
for (var i = 0; i < aboElts.length; i++) {
    aboElts[i].addEventListener("change", function (e) {
        // L'événement "change" est envoyé seulement si le bouton devient le bouton sélectionné
        console.log("Formule d'abonnement choisie : " + e.target.value);
    });
}
// Liste déroulante
document.getElementById("nationalite").addEventListener("change", (e) => {
    // La proptiété value de l'élément <select> renvoit l'attribut value du <option> sélectionné
    console.log("Code de nationalité : " + e.target.value);
})

