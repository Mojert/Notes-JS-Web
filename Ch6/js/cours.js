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

// Le formulaire comme élément du DOM
var form = document.querySelector("form");
// form.elements représente la liste des champs (en incluant les boutons etc) du form
console.log("Nombre de champs de saisie : " + form.elements.length); // affiche 10
// console.log(form.elements); // affiche la la liste des champs
console.log(form.elements[0].name); // Affiche "pseudo"
console.log(form.elements.mdp.type); // Affiche "password". mdp marche car mon id est mdp. Si l'id était motDePasse on aurait dû mettre form.elements.moDePass
// Soumission du formulaire
// Affiche toutes les données saisies ou choisies
form.addEventListener("submit", (e) => {
    // Pseudo + MDP + Courriel
    var pseudo = form.elements.pseudo.value;
    var mdp = form.elements.mdp.value;
    var courriel = form.elements.courriel.value;
    console.log("Vous avez choisi le pseudo " + pseudo + ", le mot de passe " + mdp + " et le courriel " + courriel);

    // Courriel de confirmation
    if (form.elements.confirmation.checked)
        console.log("Vous avez demandé une confirmation d'inscription par courriel");
    else
        console.log("Vous n'avez pas demandé une confirmation d'inscription par courriel");

    // Abonnement
    switch (form.elements.abonnement.value) {
    case "abonewspromo":
        console.log("Vous êtes abonné(e) à la newsletter et aux promotions");
        break;
    case "abonews":
        console.log("Vous êtes abonné(e) à la newsletter");
        break;
    case "aborien":
        console.log("Vous êtes abonné(e) à rien");
        break;
    default:
        console.log("Erreur : code d'abonnement non reconnu");
    }

    // Nationalité
    switch (form.elements.nationalite.value) {
        case "FR":
            console.log("Vous êtes français(e)");
            break;
        case "BE":
            console.log("Vous êtes belge");
            break;
        case "CH":
            console.log("Vous êtes suisse");
            break;
        default:
            console.log("Vous êtes d'un autre pays");
    }
    
    e.preventDefault(); // On annule l'envoi car on a rien pour le gérer et on a même pas configuré le form pour qu'il puisse envoyé les donnés
});
