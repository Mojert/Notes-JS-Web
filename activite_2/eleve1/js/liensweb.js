//Biblio
var listeLiens = [
    {
        titre: "So Foot",
        url: "http://sofoot.com",
        auteur: "yann.usaille"
    },
    {
        titre: "Guide d'autodéfense numérique",
        url: "http://guide.boum.org",
        auteur: "paulochon"
    },
    {
        titre: "L'encyclopédie en ligne Wikipedia",
        url: "http://Wikipedia.org",
        auteur: "annie.zette"
    }
];

//Global variables
var contenuElt = document.getElementById("contenu");
var firstBloc = document.createElement("div");
document.body.insertBefore(firstBloc, contenuElt);
var buttonElt = document.createElement("button");
buttonElt.id = "button";
buttonElt.textContent = "Ajouter un lien";
firstBloc.appendChild(buttonElt);

//Create a link
function createLink(link) {

    //Creation of the new elts
    var pElt = document.createElement("p");
    var brElt = document.createElement("br");
    var aElt = document.createElement("a");

    //Fill in the blanks
    aElt.href = link.url;
    aElt.textContent = link.titre;
    pElt.appendChild(aElt);
    pElt.appendChild(document.createTextNode(" " + link.url));
    pElt.appendChild(brElt);
    pElt.appendChild(brElt);
    pElt.appendChild(brElt);
    pElt.appendChild(brElt);
    pElt.appendChild(document.createTextNode("Ajouté par " + link.auteur));

    //Css
    pElt.style.backgroundColor = "white";
    aElt.style.textDecoration = "none";
    aElt.style.color = "#428bca";
    pElt.style.padding = "10px";
    pElt.style.fontFamily = "Helvetica Neue, Arial, sans-serif";
    aElt.style.fontWeight = "bold";
    pElt.style.fontSize = "100%";
    aElt.style.fontSize = "120%";
    pElt.style.borderRadius = "6px";

    return pElt;
}

//Add a link
function addLink() {

    //Handler on botton
    document.getElementById("button").addEventListener("click", function (e) {
        firstBloc.innerHTML = "";
        var formElt = document.createElement("form");
        //Prototype of a link object (Same constructor as listeLiens)
        var listeInput = {
            //Inistialise the liste
            init: function (titre, url, auteur) {
                this.titre = titre;
                this.url = url;
                this.auteur = auteur;
            }
        };
        //Create 3 input elements, add their caracteristics ...
        var inputElt = [];
        for (var i = 0; i < 3; i++) {
            var input = document.createElement("input");
            input.required = "true";
            inputElt.type = "text";
            input.style.marginRight = "10px";

            inputElt.push(input);
        }
        inputElt[0].name = "titre";
        inputElt[0].size = "40";
        inputElt[0].maxLength = "35";
        inputElt[0].placeholder = "Entrez le titre du lien";
        inputElt[1].name = "url";
        inputElt[1].size = "50";
        inputElt[1].maxLength = "45";
        inputElt[1].placeholder = "Entrez l'URL du lien";
        inputElt[2].name = "auteur";
        inputElt[2].size = "20";
        inputElt[2].maxLength = "15";
        inputElt[2].placeholder = "Entrez votre nom";

        //Make the validity test on the URL
        inputElt[1].addEventListener("blur", function (e) {
            testLink(e);
        });

        //Create the submit elt
        var submitElt = document.createElement("input");
        submitElt.value = "add";
        submitElt.type = "submit";

        //Add the input elements in form
        formElt.appendChild(inputElt[2]);
        formElt.appendChild(inputElt[0]);
        formElt.appendChild(inputElt[1]);
        formElt.appendChild(submitElt);
        firstBloc.appendChild(formElt); //inject form into the body

        //Handler of the submit event on form
        formElt.addEventListener("submit", function (e) {
            var intervalId = null;

            //Create an object iliste using the listeinput prototype
            var iliste = Object.create(listeInput);
            iliste.init(formElt.elements.titre.value, formElt.elements.url.value, formElt.elements.auteur.value);
            listeLiens.unshift(iliste); //Get the data entered by the user
            showListe(); //Show the  liste of links

            //Clear the firstbloc's field and create the info container
            firstBloc.innerHTML = "";
            var p = document.createElement("p");
            p.id = "p";
            p.textContent = "Le lien " + formElt.elements.titre.value + " a bien été ajouté.";
            p.style.backgroundColor = "rgba(66, 220, 244,0.2)";
            p.style.color = "#428bca";
            p.style.fontWeight = "bold";
            p.style.borderRadius = "6px";
            p.style.padding = "10px";
            p.style.fontFamily = "Helvetica Neue, Arial, sans-serif";
            p.style.textAlign = "center";
            firstBloc.appendChild(p);
            firstBloc.appendChild(buttonElt);

            //Make the info disappears after 2 secs
            setTimeout(function () {
                firstBloc.removeChild(document.getElementById("p"));

            }, 2000);

            //Saving the data
            e.preventDefault();
        });



    });

    //Show the new liste of links
    showListe();
}

//Inject into contenu
function showListe() {
    contenuElt.innerHTML = "";
    for (var i = 0; i < listeLiens.length; i++) {
        contenuElt.appendChild(createLink(listeLiens[i]));
    }
}

//Test the validity of a link
function testLink(e) {
    var regex1 = /.+\.+/;
    var regex2 = /http\:\/\//;
    var regex3 = /https\:\/\//;
    var tempo = "http://";
    if (!regex1.test(e.target.value)) {
        e.target.focus();
        e.target.value = "";
    }
    if (!regex2.test(e.target.value)) {
        if (!regex3.test(e.target.value)) {
            tempo += e.target.value;
            e.target.value = tempo;
        }
    }
}

//Get the job done :D
addLink();



/************************************************************************************************************************************                                                                                 ********************
 ***************                                Thank you for your time :D                       ********************
 ***************
 ***************                   Here's my facebook: https://www.facebook.com/RawGod00         ********************
 ***************                                                                                 ********************
 ***************                    P:S: Just don't add some porno in the links please xD        ******************** 
 ***************                                                                                 ********************
 ***************************************************************************************************************************************************************************************************************************************/
