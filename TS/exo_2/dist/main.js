"use strict";
;
let monLivre = {
    titre: "Titre livre",
    auteur: "John",
    disponible: true
};
// let livres:Array<Livre> = []
let livres = [
    monLivre,
    { titre: "livre 2", auteur: "auteur 2", disponible: true },
    { titre: "livre 3", auteur: "auteur 3", disponible: true },
    { titre: "livre 4", auteur: "auteur 4", disponible: false },
    { titre: "livre 5", auteur: "auteur 5", disponible: true }
];
function afficherCatalogue(catalogue) {
    catalogue.forEach(livre => afficherLivre(livre));
}
function afficherLivre(livre) {
    console.log(`titre: ${livre.titre}
        auteur: ${livre.auteur}
        disponibilité: ${livre.disponible ? "OUI" : "NON"}`);
}
function livresDispo(catalogue) {
    return catalogue
        .filter(l => l.disponible)
        .map(l => ({ ...l }));
}
function addLivre(catalogue, livre) {
    catalogue.push(livre);
}
function emprunter(catalogue, titre) {
    let livre = catalogue.find(l => l.titre == titre);
    if (!livre)
        throw new Error("Pas de livre avec ce titre !");
    if (!livre.disponible)
        throw new Error("ce livre n'est pas dispo !");
    livre.disponible = false;
}
function retouner(catalogue, titre) {
    let livre = catalogue.find(l => l.titre == titre);
    if (!livre)
        throw new Error("Pas de livre avec ce titre !");
    if (livre.disponible)
        throw new Error("ce livre est déjà dans le stock dispo !");
    livre.disponible = true;
}
