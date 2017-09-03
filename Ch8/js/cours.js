// Création d'une requête HTTP
var req = new XMLHttpRequest();
// Requête HTTP GET synchrone vers le fichier langages.txt publié localement
// Cette méthode sert à préparer la requête. Le premier paramètre est le type de la requête, le second est l'URL cible est le dernier est un booléan permettant de savoir si la requête sera asynchrone
// req.open("GET", "http://localhost/javascript-web-srv/data/langages.txt", false);
// Envoi de la requête
// Prend en paramètre l'éventuelle information à envoyer (POST ou PUT) ou null s'il n'y a rien(GET)
// req.send(null);
// Affiche la réponse reçue pour la requête
// console.log(req.responseText); // Cette propriété contient la réponse sous forme textuelle

// La console nous met un avertissement car il est risqué d'utilisé des requêtes synchrones en JS car on a l'impression que la page ne répond plus alors qu'elle attend juste la réponse du serveur
// Voici la solution :

// La requête est synchrone quand le 3e paramètre vaut true ou n'est pas renseigné
req.open("GET", "http://localhost/javascript-web-srv/data/langages.txt");
// Gestion de l'événement indiquant la fin de la requête
req.addEventListener("load", () => {
    // Gère les erreurs lorsque la requête a atteint le serveur
    if (req.status >= 200 && req.status < 400) {// Le serveur a réussi à traiter la requête
        // Affiche la réponse reçue par la requête
        console.log(req.responseText);
    } else {
        // Affichage des informations sur l'échec du traitement de la requête
        console.error(req.status + " "  + req.statusText);
    }
});
// Gère les erreurs lorsque le serveur est injoignable
req.addEventListener("error", () => {
    // La requête n'a pas réussi à atteindre le serveur
    console.error("Erreur réseau");
});
req.send(null);

// On se rend compte que ça fait beaucoup de code pour juste une requête. Une possibilité d'y remédier est d'utiliser une fonction
// Elle est définie dans ajax.js

ajaxGet("http://localhost/javascript-web-srv/data/langages.txt", (reponse) => {
    console.log(reponse);
});
