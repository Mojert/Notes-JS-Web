// Liste de quelques maisons de Game of Thrones. Chaque maison a un code et un nom
var maisons = [
    {
        code: "ST",
        nom: "Stark"
    },
    {
        code: "LA",
        nom: "Lannister"
    },
    {
        code: "BA",
        nom: "Baratheon"
    },
    {
        code: "TA",
        nom: "Targaryen"
    }
];

// Renvoie un tableau contenant quelques personnages d'une maison
function getPersonnages(codeMaison) {
    switch (codeMaison) {
    case "ST":
        return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
    case "LA":
        return ["Tywin", "Cersei", "Jaime", "Tyrion"];
    case "BA":
        return ["Robert", "Stannis", "Renly"];
    case "TA":
        return ["Aerys", "Daenerys", "Viserys"];
    default:
        return [];
    }
}

var selectElt = document.getElementById("maison");
// On remplit le menu défilant
maisons.forEach((maison) => {
    var optionElt = document.createElement("option");
    optionElt.textContent = maison.nom;
    optionElt.value = maison.code;
    selectElt.appendChild(optionElt);
});

selectElt.addEventListener("change", (e) => {
    var listeElt = document.getElementById("persos");
    // On vide la liste
    while (listeElt.firstElementChild != null)
        listeElt.removeChild(listeElt.firstElementChild);
    // On remplit la liste
    getPersonnages(e.target.value).forEach((perso) => {
        var persoElt = document.createElement("li");
        persoElt.textContent = perso;
        listeElt.appendChild(persoElt);
    });
})
