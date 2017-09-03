/* 
Activité 2
*/

// Liste des liens Web à afficher. Un lien est défini par :
// - son titre
// - son URL
// - son auteur (la personne qui l'a publié)
var list0=null;

var button1=document.getElementById("button1");
button1.addEventListener("click",function modif(e){
    document.getElementById("div").removeChild(this);
    
   /* document.getElementById("form1").insertAdjacentHTML("afterBegin",'<form><input type="text" id="nom" style="margin:10px" required placeholder="Entrer votre nom" /><input type="text" id="titre" style="margin:10px" required placeholder="Entrer le titre de lien" /> <input type="text" id="url" style="margin:10px" required placeholder="Entrer Url de lien"/> <input type="submit" id="button2" value="Ajouter"/> </form>')  ;
    
var text=document.getElementById("titre");
console.log(text.textContent);*/
    var form=document.getElementById("form1");
    var nom=document.createElement("input")
    nom.type="text";
    nom.Id="nom";
    nom.style.margin="10px";
    nom.required=true;
    nom.placeholder="Entrer votre nom";
    form.appendChild(nom);
    
    //////////////////////////////////
    
    var titre=document.createElement("input")
    titre.type="text";
    titre.Id="titre";
    titre.style.margin="10px";
    titre.required=true;
    titre.placeholder="Entrer le titre de lien";
    form.appendChild(titre);
    
    /////////////////////////////////////
    
    var url=document.createElement("input")
    url.type="text";
    url.Id="url";
    url.style.margin="10px";
    url.required=true;
    
    url.placeholder="Entrer l'url de lien";
    form.appendChild(url);
    
    
    //////////////////////////////////////////
    var button=document.createElement("input")
    button.type="submit";
    button.Id="button2";
    button.value="Ajouter";
    button.onclick=function(){
        //var url=form.elements.url.value;
        var formulaire=document.querySelector("form");
        //console.log(formulaire.elements[2].value);
        var nomSaisie=formulaire.elements[0].value;
        var titreSaisie=formulaire.elements[1].value;
        var urlAjouter=formulaire.elements[2].value;
        if((urlAjouter.indexOf("http://")===-1) &&(urlAjouter.indexOf("https://")===-1)) {
            var ajout=urlAjouter;
            urlAjouter="http://"+ajout;
        }
        
       ////////////////////////////////
         list0=Object.create(listeLiens);

list0.initLien(titreSaisie,urlAjouter,nomSaisie);
        console.log(list0.titre);
        
       var x= remplir(list0);
        if(x===1){
            document.createTextNode(" enfin j'ai arriver ");
            
        }
        
        
        
        /////////////////////////////////
     /*    lienElt = document.createElement("p"); 
	lienElt.setAttribute("class", "lien"); 
	
	// Création du url de la ième lien
	 urlElt = document.createElement("span");   
	urlElt.appendChild(document.createTextNode("  "+urlAjouter));
    
	lienElt.appendChild(urlElt); 
	lienElt.appendChild(document.createElement("br")); // ajouter retour à la ligne
	lienElt.appendChild(document.createTextNode(" Ajouté par "+nomSaisie));

	
     titreElt = document.createElement("a"); // Création de la ième balise a qui va contenir le titre du ième lien
    titreElt.href = urlAjouter ;
    titreElt.textContent = titreSaisie; 
    lienElt.insertBefore(titreElt,urlElt); // Insertion du titre avant le url du ième lien
	
    document.getElementById("contenu").insertBefore(lienElt,lienId); // Insertion du ième lien dans div (id = contenu)
   
 
 

// modifications du style
var titreElts = document.getElementsByTagName("a");


	titreElts.setAttribute("style", "color: #428bca;");
	titreElts.style.fontSize = "120%";
	titreElts.style.fontWeight = "bolder";
	titreElts.style.textDecoration = "none";
	titreElts.style.paddingRight = "10px";
	titreElts.style.lineHeight= "50px";
	

        
        
        //////////////////////////////////
        
        
       */ 
        
    };
    
  
    form.appendChild(button);
    ////////////////////////////////////////
   
    

   
});


/*
    var button2=document.getElementById("button2");
button2.addEventListener("submit",function ajout(){
    var url=form.elements.url.value;
    console.log(url);
    
    
});*/



var listeLiens={
    initLien: function(titre,url,auteur){
        this.titre=titre;
        this.url=url;
        this.auteur=auteur;
    }
    
};









var list1=Object.create(listeLiens);
var list2=Object.create(listeLiens);
var list3=Object.create(listeLiens);

list1.initLien("So Foot","http://sofoot.com","yann.usaille");
list2.initLien("Guide d'autodéfense numérique","http://guide.boum.org","paulochon");
list3.initLien("L'encyclopédie en ligne Wikipedia","http://Wikipedia.org","annie.zette");

//console.log(list1.auteur);

//remplissage de tableau
if (list0!==null){
var lists=[list0,list1,list2,list3];
}
else{
    lists=[list1,list2,list3];
    
}

//remplir(lists);



/*


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
];*/

// TODO : compléter ce fichier pour ajouter les liens à la page web

remplir(list0);

function remplir(list0){
    var x=0;

if (list0!==null){
var lists=[list0,list1,list2,list3];
     x=1;
}
else{
    lists=[list1,list2,list3];
    
    
}


for(var i=0 ; i<lists.length ; i++){
    

    
    
    // Création de la ième lien
	var lienElt = document.createElement("p"); 
	lienElt.setAttribute("class", "lien"); 
    lienElt.setAttribute("id","lienId");
	
	// Création du url de la ième lien
	var urlElt = document.createElement("span");   
	urlElt.appendChild(document.createTextNode("  "+lists[i].url));
    
	lienElt.appendChild(urlElt); 
	lienElt.appendChild(document.createElement("br")); // ajouter retour à la ligne
	lienElt.appendChild(document.createTextNode(" Ajouté par "+lists[i].auteur));

	
    var titreElt = document.createElement("a"); // Création de la ième balise a qui va contenir le titre du ième lien
    titreElt.href = lists[i].url ;
    titreElt.textContent = lists[i].titre; 
    lienElt.insertBefore(titreElt,urlElt); // Insertion du titre avant le url du ième lien
	
    document.getElementById("contenu").appendChild(lienElt); // Insertion du ième lien dans div (id = contenu)
   
 
} 

// modifications du style
var titreElts = document.getElementsByTagName("a");
for(var i=0 ; i<titreElts.length ; i++){

	titreElts[i].setAttribute("style", "color: #428bca;");
	titreElts[i].style.fontSize = "120%";
	titreElts[i].style.fontWeight = "bolder";
	titreElts[i].style.textDecoration = "none";
	titreElts[i].style.paddingRight = "10px";
	titreElts[i].style.lineHeight= "50px";
	
}
  return x;



}
  