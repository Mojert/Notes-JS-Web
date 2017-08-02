/* 
Activité 1
*/

// Liste des liens Web à afficher. Un lien est défini par :
// - son titre
// - son URL
// - son auteur (la personne qui l'a publié)
var listeLiens = [
    {
        titre: "So Foot",
        url: "http://sofoot.com",
        auteur: "yann.usaille"
    },
    {
        titre: "Guide d'autodéfense numérique",
        url: "http://guide.boum.org",
        auteur: "paulochon"
    },
    {
        titre: "L'encyclopédie en ligne Wikipedia",
        url: "http://Wikipedia.org",
        auteur: "annie.zette"
    }
];

// TODO : compléter ce fichier pour ajouter les liens à la page web

listeLiens.forEach(function(lien) {
    var lienTitreElt = document.createElement("a");
    lienTitreElt.href = lien.url;
    lienTitreElt.textContent = lien.titre;
    lienTitreElt.style.color = "#428bca";
    lienTitreElt.style.textDecoration = "none";
    
    var titreElt = document.createElement("h2");
    titreElt.appendChild(lienTitreElt);
    titreElt.style.display = "inline-block";
    titreElt.style.marginTop = "0";
    
    var urlElt = document.createElement("p");
    urlElt.textContent = lien.url;
    urlElt.style.display = "inline-block";
    urlElt.style.marginLeft = "10px";
    
    var auteurElt = document.createElement("p");
    auteurElt.textContent = "Ajouté par " + lien.auteur;
    auteurElt.style.marginTop = "0";
    
    var lienElt = document.createElement("div");
    lienElt.appendChild(titreElt);
    lienElt.appendChild(urlElt);
    lienElt.appendChild(auteurElt);
    
    lienElt.style.backgroundColor = "white";
    lienElt.style.padding = "10px";
    lienElt.style.marginBottom = "20px";
    
    document.getElementById("contenu").appendChild(lienElt);
});