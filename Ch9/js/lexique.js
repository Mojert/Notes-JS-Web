var choixElts = document.getElementsByClassName("lettre");
var motsElt = document.getElementById("mots");

function afficherMots(reponse) {
    var mots = JSON.parse(reponse);

    if (mots.length > 0) {
        mots.forEach((mot) => {
            var termeElt = document.createElement("h2");
            termeElt.textContent = mot.term;
            motsElt.appendChild(termeElt);

            var definitionElt = document.createElement("p");
            definitionElt.textContent = mot.definition;
            motsElt.appendChild(definitionElt);
        });
    } else {
        var messageElt = document.createElement("p");
        messageElt.textContent = "Aucun mot trouvé :(";
        motsElt.appendChild(messageElt);
    }
}

for (var i = 0; i < choixElts.length; i++) {
    choixElts[i].addEventListener("click", (e) => {
        motsElt.innerHTML = "";
        ajaxGet("https://oc-jswebsrv.herokuapp.com/api/lexique/" + e.target.id.toUpperCase(), afficherMots);
    });
}

