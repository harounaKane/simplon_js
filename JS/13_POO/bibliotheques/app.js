import { Bibliotheque } from "./Bibliotheque.js";
import { Emprunt } from "./Emprunt.js";

let qs = s => document.querySelector(s);

let emprunt = new Emprunt();

let emprunt_books = qs("#emprunt_books");

let b1 = new Bibliotheque("b1");    
let b2 = new Bibliotheque("b2");

let bolckB1 = qs("#b1-books");
let bolckB2 = qs("#b2-books");

bookBloc(bolckB1, b1.afficherCatalogue());
bookBloc(bolckB2, b2.afficherCatalogue());

dropZone(bolckB1, b1, b2);
dropZone(bolckB2, b2, b1);

function bookBloc(el, data){
    
    data.forEach(livre => {

        let btn = document.createElement("button");
        btn.innerHTML = livre.titre;
        btn.title = livre.auteur;
        btn.classList.add("book");

        if( !livre.disponibilite ) btn.classList.add("indispo")
        

        btn.draggable="true";
        btn.id = livre.id;

        btn.addEventListener("dragstart", e => {
            e.dataTransfer.setData("text/plain", livre.id);   
        });

        el.appendChild(btn);
    });
            
}
    

function dropZone(el, zoneBib, autreBib){
    el.addEventListener("dragover", e => {
        e.preventDefault();
        el.classList.add("books");
    });

    
    el.addEventListener("dragleave", e => {
        e.preventDefault();
        el.classList.remove("books");
    });

    el.addEventListener("drop", e => {
        e.preventDefault();
        let id = e.dataTransfer.getData("text/plain");
        let livre = autreBib.livreManager.getLivreById(id);        

        if( livre && livre.disponibilite ){
            zoneBib.addLivre(livre);
            autreBib.retirerLivre(id);

            refresh();
            el.classList.remove("books");
            return;
        }

        livre = emprunt.getLivreById ? emprunt.getLivreById(id) : emprunt.load().find(x => x.id == id);
        
        if (livre) {
            zoneBib.retournerLivre(livre.id);

            if (emprunt.removeLivre){ 
                emprunt.removeLivre(id);
            }

            refresh();
        }        
        
        el.classList.remove("books");
    });
}

emprunt_books.addEventListener("drop", e => {
    e.preventDefault();
    let id = e.dataTransfer.getData("text/plain");    
    
    let livre = emprunter(id);
    if( livre ){
        emprunt.addLivre(livre);
        refresh();
    }

    emprunt_books.classList.remove("books");
});


function emprunter(id){
    if(b1.emprunterLivre(id)){
        return b1.livreManager.getLivreById(id);
    }else if(b2.emprunterLivre(id)){
        return b2.livreManager.getLivreById(id);
    }
    
    return false;
}


function livresEmpruntes(){
    emprunt_books.innerHTML = "";
    
    emprunt.load().forEach(l => {
        let btn = document.createElement("button");
        btn.innerHTML = l.titre;
        btn.title = l.auteur;
        btn.classList.add("book");
        
        if( !l.disponibilite ) btn.classList.add("indispo");
            
        btn.draggable="true";
        btn.id = l.id;
        
        btn.addEventListener("dragstart", e => { e.dataTransfer.setData("text/plain", l.id); });
        
        emprunt_books.appendChild(btn);
    });   
}

emprunt_books.addEventListener("dragover", e => {
    e.preventDefault();
    emprunt_books.classList.add("books");
});

emprunt_books.addEventListener("dragleave", e => {
    e.preventDefault();
    emprunt_books.classList.remove("books");
});
    
function refresh(){
    livresEmpruntes();

    bolckB1.innerHTML = "";
    bolckB2.innerHTML = "";
    bookBloc(bolckB1, b1.afficherCatalogue());
    bookBloc(bolckB2, b2.afficherCatalogue());

}

refresh();

/*

import { Bibliotheque } from "./Bibliotheque.js";
import { Livre } from "./Livre.js";
import { LivreManager } from "./LivreManger.js";


try{
    let ob = {titre: "Une si longur lettre", auteur: "Mariama Ba"};
    let ob2 = {titre: "Oui Commandant", auteur: "Hampaté Ba"};
    let ob3 = {titre: "Afrique à coeur", auteur: "Macky Sall"};
    let ob4 = {titre: "La gouvernante", auteur: "Joy Fielding"};
    let ob5 = {titre: "L'enfant noir", auteur: "Camara Laye"};


    let b = new Bibliotheque("b1");
    b.addLivre(new Livre(ob));
    b.addLivre(new Livre(ob2));
    b.addLivre(new Livre(ob3));
    b.addLivre(new Livre(ob4));
    b.addLivre(new Livre(ob5));



    let ob12 = {titre: "A coeur ouvert", auteur: "Monique Mazars"};
    let ob22 = {titre: "Initiation JS", auteur: "Loan"};
    let ob32 = {titre: "Expert Python", auteur: "Chemseddine"};
    let ob42 = {titre: "Professeur Java", auteur: "Zakkaria"};
    let ob52 = {titre: "Petit pays", auteur: "Gael Faye"};


    let b2 = new Bibliotheque("b2");
    b2.addLivre(new Livre(ob12));
    b2.addLivre(new Livre(ob22));
    b2.addLivre(new Livre(ob32));
    b2.addLivre(new Livre(ob42));
    b2.addLivre(new Livre(ob52));





}catch(e){
    console.log(e.message);
}
    */