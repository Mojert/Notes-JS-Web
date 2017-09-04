function ajaxGet(url, callback){
    var req = new XMLHttpRequest();
    req.open("GET", url);
    req.addEventListener("load", () => {
        if (req.status >= 200 && req.status < 400) {
            // Appelle la fonction "callback"
            callback(req.responseText);
        } else {
            console.error(req.status + " " + req.statusText + " " + url);
        }
    });
    req.addEventListener("error", () => {
        console.log("Erreur réseau avec l'URL " + url);
    });
    req.send(null);
}
