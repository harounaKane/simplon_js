
// Valeur aléatoire de 1 à 10
const choixOrdi = Math.ceil( Math.random() * 10 );
let choixJoueur = parseInt(prompt("une valeur"));

let paire = choixJoueur%2 == 0 && choixOrdi%2 == 0;
let impaire = choixJoueur%2 !== 0 && choixOrdi%2 !== 0;


if( !isNaN( choixJoueur ) ){
    // si paire
    if(paire){
        console.log("Le joueur a gagné");
        
        // si impaire
    }else if(impaire){
        console.log("L'ordinateur a gagné");
        
        // égalité
    }else{
        console.log("Egalité");
    }

    console.log(choixOrdi, choixJoueur);
}
