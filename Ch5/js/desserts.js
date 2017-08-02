function modifier(e) {
    var nom = prompt("Nouveau nom du dessert :", e.target.textContent);
    e.target.textContent = nom;
}

// Bouton ajouter
document.querySelector("button").addEventListener("click", () => {
    var nom = prompt("Nouveau dessert :");
    var liElt = document.createElement("li");
    liElt.appendChild(document.createTextNode(nom));
    liElt.addEventListener("click", modifier);
    document.getElementById("desserts").appendChild(liElt);
});