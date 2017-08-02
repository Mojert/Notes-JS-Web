/* 
Activité 1
*/

// Liste des liens Web à afficher. Un lien est défini par :
// - son titre
// - son URL
// - son auteur (la personne qui l'a publié)
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

// TODO : compléter ce fichier pour ajouter les liens à la page web

var nodeUl=document.createElement("ul");
nodeUl.style.textDecoration="none";


for (var i=0;i<listeLiens.length;i++){
    //creation des noeuds: structure ul>li> a et span
    var nodeLi=document.createElement("li");
    var nodeSpan=document.createElement("span");
    nodeLi.className="lien";
    nodeLi.style.listStyleType="none" //enlever les puces de la liste
    
    var nodeA=document.createElement("a");
    nodeA.href=listeLiens[i].url;
    nodeA.style.color="#428bca";
    nodeA.style.textDecoration="none";
    nodeA.style.fontWeight="bold";
    nodeA.textContent=listeLiens[i].titre;
    
    var nodeSuiv=document.createElement("span");
    nodeSuiv.innerHTML+=" "+listeLiens[i].url+"<br>Ajoute par "+listeLiens[i].auteur;
    
    
    
    //accrochage des noeuds
    nodeSpan.appendChild(nodeA);
    nodeSpan.appendChild(nodeSuiv);
    nodeLi.appendChild(nodeSpan);
    nodeUl.appendChild(nodeLi);
}

//accrochage du noeud final
document.getElementById("contenu").appendChild(nodeUl);