/*Exercice 3.3 – Compter les voyelles
Contexte :
Tu analyses une chaîne de caractères.
Consignes :
•	Variable texte (string).
•	Parcourir chaque caractère avec une boucle.
•	Compter le nombre de voyelles (a,e,i,o,u,y) sans tenir compte de la casse.
Bonus :
•	Retourner aussi un objet de fréquences par voyelle.
•	Ignorer les accents (option).


Ex : text = "Aix-en-provence"*/


let text = "Aix-en-provence";
let voyelles = ["a", "e", "i", "o", "u", "y"];
let frequences = {a: 0, e: 0, i: 0, o: 0, u: 0, y: 0};
let compteur = 0;

for(let caractere of text){
    let c = caractere.toLowerCase();
    if( voyelles.includes(c) ){
        compteur++;
        frequences[c]++;
    }
}

console.log(compteur);
console.log(frequences);

