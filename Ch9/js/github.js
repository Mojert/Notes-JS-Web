var profilElt = document.getElementById("profil");

function afficherProfil(reponse) {
    var utilisateur = JSON.parse(reponse);

    // Récupération des donnés
    var imageUrl = utilisateur.avatar_url;
    var nom = utilisateur.name != null && utilisateur.name !== "" ? utilisateur.name : utilisateur.login;
    var employeur = utilisateur.company;
    var url = utilisateur.blog;

    // Traitement
    var imageElt = document.createElement("img");
    imageElt.src = imageUrl;
    profilElt.appendChild(imageElt);

    var informationsElt = document.createElement("p");
    var nomElt = document.createElement("span");
    nomElt.textContent = nom;
    informationsElt.appendChild(nomElt);
    if (employeur != null && employeur !== "") {
        informationsElt.appendChild(document.createElement("br"));
        var employeurElt = document.createElement("span");
        employeurElt.textContent = employeur;
        employeurElt.style.fontSize = "80%";
        informationsElt.appendChild(employeurElt);
    }
    if (url != null && url !== "") {
        informationsElt.appendChild(document.createElement("br"));
        var siteElt = document.createElement("a");
        siteElt.href = url;
        siteElt.textContent = url;
        informationsElt.appendChild(siteElt);
    }

    profilElt.appendChild(informationsElt);
}

document.getElementById("recherche").addEventListener("submit", (e) => {
    var utilisateurElt = document.getElementById("utilisateur"); // Le champ du formulaire
    var nomUtilisateur = utilisateurElt.value;
    utilisateurElt.value = "";
    profilElt.innerHTML = "";
    ajaxGet("https://api.github.com/users/" + nomUtilisateur, afficherProfil);

    e.preventDefault();
});
