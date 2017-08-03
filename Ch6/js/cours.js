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


