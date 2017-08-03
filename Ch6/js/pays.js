// Liste des pays
var listePays = [
    "Afghanistan",
    "Afrique du Sud",
    "Albanie",
    "Algérie",
    "Allemagne",
    "Andorre",
    "Angola",
    "Anguilla",
    "Antarctique",
    "Antigua-et-Barbuda",
    "Antilles néerlandaises",
    "Arabie saoudite",
    "Argentine",
    "Arménie",
    "Aruba",
    "Australie",
    "Autriche",
    "Azerbaïdjan"
];

document.getElementById("pays").addEventListener("input", (e) => {
    // On crée une liste de tous les pays prédits
    var liste = []
    listePays.forEach((pays) => {
        if (pays.toLowerCase().indexOf(e.target.value) !== -1)
            liste.push(pays);
    });

    // On vide d'abbord le wrapper
    var wrapperElt = document.getElementById("suggestions");
    while (wrapperElt.firstChild != null)
        wrapperElt.removeChild(wrapperElt.firstChild);
    // On ajoute chaque élément de la liste dans le wrapper
    liste.forEach((pays) => {
        var suggestionElt = document.createElement("div");
        suggestionElt.classList.add("suggestion");
        suggestionElt.textContent = pays;
        // On ajoute le fait qu'on puisse cliquer dessus
        suggestionElt.addEventListener("click", (e) => {
            document.getElementById("pays").value = e.target.textContent;
            // Quand on a sélectionné, on peut vider le wraper
            while (wrapperElt.firstChild != null)
                wrapperElt.removeChild(wrapperElt.firstChild);
        });
        wrapperElt.appendChild(suggestionElt);
    });
});
