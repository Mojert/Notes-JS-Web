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

/* // version utilisant insertAdjacentHTML

for (var i = 0; i < listeLiens.length; i++) {
    document.getElementById("contenu").insertAdjacentHTML('beforeend', '<p class="lien"><a href="' + listeLiens[i].url + '" style="color: #428bca">' + listeLiens[i].titre + '</a><span> ' + listeLiens[i].url + '<br />Ajouté par ' + listeLiens[i].auteur + '</span></p>');
}
*/

// version utilisant appendChild et la procédure en 3 étapes : création, modification et ajout

for (var i = 0; i < listeLiens.length; i++) {

    var pElt = document.createElement("p");
    pElt.className = "lien";

    var aElt = document.createElement("a");
    aElt.href = listeLiens[i].url;
    aElt.style.color = "#428bca";
    aElt.textContent = listeLiens[i].titre;

    var spanElt = document.createElement("span");
    spanElt.innerHTML = " " + listeLiens[i].url + "<br /> Ajouté par " + listeLiens[i].auteur;

    document.getElementById("contenu").appendChild(pElt);

    document.getElementsByClassName("lien")[i].appendChild(aElt);
    document.getElementsByClassName("lien")[i].appendChild(spanElt);
}
