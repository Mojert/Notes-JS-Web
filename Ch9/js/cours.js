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
