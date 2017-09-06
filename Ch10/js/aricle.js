var formulaire = document.querySelector("form");
var messageElt = document.getElementById("message");

formulaire.addEventListener("submit", (e) => {
    e.preventDefault();

    var data = new FormData(formulaire);
    ajaxPost("https://oc-jswebsrv.herokuapp.com/article", data, (reponse) => {
        var pElt = document.createElement("p");
        pElt.textContent = "L'article a bien été envoyé";
        messageElt.appendChild(pElt);
        setTimeout(() => {
            messageElt.innerHTML = "";
        }, 2000);
    });
});
