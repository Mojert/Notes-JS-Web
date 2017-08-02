function incrementerCompteur () {
    var compteurElt = document.getElementById("compteurClics");
    var compteur = parseInt(compteurElt.textContent);
    compteur++;
    compteurElt.textContent = compteur.toString();
}

function arreterCompteur() {
    document.getElementById("clic").removeEventListener("click", incrementerCompteur);
}

document.getElementById("clic").addEventListener("click", incrementerCompteur);
document.getElementById("desactiver").addEventListener("click", arreterCompteur);
