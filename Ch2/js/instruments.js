function infosLiens() {
    var liensElts = document.getElementsByTagName("a");
    console.log(liensElts.length);
    console.log(liensElts[0].href);
    console.log(liensElts[liensElts.length - 1].href);
}

function possede(id, classe) {
    var element = document.getElementById(id);
    if (element == null)
        console.error("Aucun élément ne possède l'identifiant \""+classe+"\"");
    else
        console.log(element.classList.contains(classe));
}

infosLiens();

possede("saxophone", "bois"); // Doit afficher true
possede("saxophone", "cuivre"); // Doit afficher false
possede("trompette", "cuivre"); // Doit afficher true
possede("contrebasse", "cordes"); // Doit afficher une erreur