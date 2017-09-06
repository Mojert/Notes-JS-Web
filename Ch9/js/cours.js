var articlesElt = document.getElementById("articles");

function ajouterArticles(articlesStr){
    var articles = JSON.parse(articlesStr);

    articles.forEach((article) =>{
        var titreElt = document.createElement("h2");
        titreElt.textContent = article.titre;
        articlesElt.appendChild(titreElt);
        var corpsElt = document.createElement("p");
        corpsElt.textContent = article.contenu;
        articlesElt.appendChild(corpsElt);
    });
}

ajaxGet("https://oc-jswebsrv.herokuapp.com/api/articles", ajouterArticles);


var premMinElt = document.getElementById("premMin");
// Accès aux informations publiques sur le Premier Ministre
ajaxGet("https://www.data.gouv.fr/api/1/organizations/premier-ministre/", (reponse) => {
    var premMin = JSON.parse(reponse);
    // Texte
    var texteElt = document.createElement("p");
    texteElt.textContent = premMin.description;
    // Image
    var imageElt = document.createElement("img");
    imageElt.src = premMin.logo_thumbnail;

    premMinElt.appendChild(texteElt);
    premMinElt.appendChild(imageElt);
});

var meteoElt = document.getElementById("meteo");

ajaxGet("http://api.wunderground.com/api/" + weatherUnderground + "/conditions/q/Switzerland/Lausanne.json", (reponse) => {
    var meteo = JSON.parse(reponse);
    // Récupération de certains résultats
    var temperature = meteo.current_observation.temp_c;
    var humidite = meteo.current_observation.relative_humidity;
    var imageUrl = meteo.current_observation.icon_url;
    // Affichage des résultats
    var conditionElt = document.createElement("p");
    conditionElt.textContent = "Il fait actuellement " + temperature + "°C et l'humidité est de " + humidite;
    var imageElt = document.createElement("img");
    imageElt.src = imageUrl;

    meteoElt.appendChild(conditionElt);
    meteoElt.appendChild(imageElt);
});
