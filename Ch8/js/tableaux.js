var listeElt = document.getElementById("tableaux");

ajaxGet("http://localhost/javascript-web-srv/data/tableaux.json", (reponse) => {
    var tableaux = JSON.parse(reponse);

    tableaux.forEach((tableau) => {
        // On crée une rangée
        var trElt = document.createElement("tr");

        // On crée les cellules
        var nomElt = document.createElement("td");
        nomElt.textContent = tableau.nom;
        trElt.appendChild(nomElt);
        var anneeElt = document.createElement("td");
        anneeElt.textContent = tableau.annee;
        trElt.appendChild(anneeElt);
        var auteurElt = document.createElement("td");
        auteurElt.textContent = tableau.auteur;
        trElt.appendChild(auteurElt);

        // Et on ajoute tout ça
        listeElt.appendChild(trElt);
    });
});
