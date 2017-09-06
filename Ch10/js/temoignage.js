var formulaire = document.querySelector("form");

formulaire.addEventListener("submit", (e) => {
    e.preventDefault();
    
    var data = {
        pseudo: formulaire.pseudo.value,
        evaluation: parseInt(formulaire.evaluation.value),
        message: formulaire.message.value
    };

    ajaxPost("https://oc-jswebsrv.herokuapp.com/api/temoignage", data, (reponse) => {
        console.log("C'est tout bon !");
    }, true);
});
