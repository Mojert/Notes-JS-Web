var demarrerElt = document.getElementById("demarrer");
var arreterElt = document.getElementById("arreter");
var cadre = document.getElementById("cadre");
var ballon = document.getElementById("ballon");
var vitesse = 7;
var direction = 1;
var animationID = null;

function animation() {
    var xBallon = parseFloat(getComputedStyle(ballon).left);
    var largeurBallon = parseFloat(getComputedStyle(ballon).width);
    var xMax = parseFloat(getComputedStyle(cadre).width);
    var nouveauX = xBallon + direction * vitesse;
    // Si on est dans la zone légale
    if (0 <= nouveauX && nouveauX + largeurBallon <= xMax) {
        ballon.style.left = nouveauX + "px";
    } else {
        // On le met à sa place
        ballon.style.left = direction === 1 ? (xMax - largeurBallon) + "px" : "0px";
        // On change la direction
        direction *= -1;
    }

    animationID = requestAnimationFrame(animation);
}


demarrerElt.addEventListener("click", () => {
    animationID = requestAnimationFrame(animation);
    demarrerElt.disabled = true;
    arreterElt.disabled = false;
});

arreterElt.addEventListener("click", () => {
    cancelAnimationFrame(animationID);
    demarrerElt.disabled = false;
    arreterElt.disabled = true;
})