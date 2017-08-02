document.addEventListener("keyup", (e) => {
    // console.log(e.keyCode);
    var divElts = document.getElementsByTagName("div");
    var couleur = divElts[0].style.backgroundColor;
    switch (e.keyCode) {
    case 82: // Touche R
        couleur = "red";
        break;
    case 74: // Touche J
        couleur = "yellow";
        break;
    case 86: // Touche V
        couleur = "green";
        break;
    case 66: // Touche B
        couleur = "white";
        break;
    }
    for (var i = 0; i < divElts.length; i++)
        divElts[i].style.backgroundColor = couleur;
});

