var boutonElt = document.getElementById("bouton");
var tempsElt = document.getElementById("temps");
var intervalID = null;

function updateTemps() {
    var temps = parseFloat(tempsElt.textContent);
    tempsElt.textContent = temps + 1;
}

boutonElt.addEventListener("click", () => {
    if (boutonElt.textContent === "Démarrer") {
        boutonElt.textContent = "Arrêter";
        intervalID = setInterval(updateTemps, 1000);
    } else {
        boutonElt.textContent = "Démarrer";
        if (intervalID != null)
            clearInterval(intervalID);
    }
});