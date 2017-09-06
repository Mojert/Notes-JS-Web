// Commande POST fait "à la main"

// Création d'un objet FormData
// Il permet de stocker les donnés d'un formulaire
var identite = new FormData();
// Ajout d'information dans l'objet
identite.append("login", "Bob");
identite.append("password", "azerty");
// Création et configuration d'une requête HTTP POST vers le fichier post_form.php
var req = new XMLHttpRequest();
req.open("POST", "http://localhost/javascript-web-srv/post_form.php");
// Envoi de la requête en y incluant l'objet
req.send(identite);

// En utilisant notre générique

var commande = new FormData();
commande.append("couleur", "rouge");
commande.append("poiture", "43");

ajaxPost("http://localhost/javascript-web-srv/post_form.php", commande, (reponse) => {
    console.log("Commande envoyée au serveur");
});

var form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    // Récupération des champs du formulaire dans l'objet FormData
    var data = new FormData(form);
    // La fonction callback est vide
    ajaxPost("http://localhost/javascript-web-srv/post_form.php", data, function () {});
});

// Création d'un objet représentant un film
var film = {
    titre: "Zootopie",
    annee: 2016,
    realisateur: "Byron Howard et Roch Moore"
};
// Envoi de l'objet au serveur
ajaxPost("http://localhost/javascript-web-srv/post_json.php", film, (reponse) => {
    console.log("Le film " + JSON.stringify(film) + " a été envoyé au serveur");
}, true);
