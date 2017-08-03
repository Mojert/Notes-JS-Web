/* Critères :
 * Les 2 mots de passes doivent être identiques
 * Leur longueur doit être d'au minimum 6 caractères
 * Ils doivent contenir au moins un chiffre
 */

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    var mdp1 = document.getElementById("mdp1").value;
    var mdp2 = document.getElementById("mdp2").value;

    var message = "";
    if (mdp1 !== mdp2)
        message += "Erreur : Les deux mots de passes sont différents\n";
    if (mdp1.length < 6)
        message += "Erreur : Le mot de passe doit consister d'au minimum 6 caractères\n";
    if (!(/\d/.test(mdp1) && /[a-zA-Z]/.test(mdp1)))
        message += "Erreur : Le mot de passe doit contenir au moins 1 lettre et 1 chiffre\n";

    document.getElementById("infoMdp").innerText = message;
});
