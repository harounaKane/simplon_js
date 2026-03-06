"use strict";
let personne = { prenom: "toto", id: 20 };
console.log(personne);
let user = "Admin";
let genre = "Femme";
let utilisauter = { id: 10, nom: "Toto" };
// GENERICITE
function retounerUneValeur(n) {
    return "hhjh";
}
retounerUneValeur("toto");
function generic(n) {
    return n;
}
let y = generic(2000);
let x = generic(true);
let tab1 = [10, 30, 50, 400];
let tab2 = ["toto", "tata", "titi", "400"];
// afficher(tab1);
// afficher(tab2);
function afficher(tab) {
    for (let val of tab) {
        console.log(val);
    }
}
class User {
    _id;
    _prenom;
    constructor(id, prenom) {
        this._id = id;
        this._prenom = prenom;
    }
}
console.log(new User("id_24", "Toto"));
console.log(new User(56, "Tata"));
