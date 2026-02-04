// let age = Number(prompt("veillez rentrer votre age"));
//  let ville = prompt("rentre ta ville");
// if (age>=18 && age<=60 && ville.length>5){
//     let prenom = prompt("rentre ton prenom");
   
//     console.log("je mappel :  "+ prenom+ " monage : " + age+" ma ville "+ville);
// }

// for (let i=2; i<=10; i++) { 
//     if ( i%3==0){ 
//         continue
//     }
//     console.log(i);
// }

// Demander, via un prompt, la saisie d'une note [0, 20]. redemander tant que le note n'est pas dans l'intervalle.

// let note;
// do{
//     note = Number( prompt("Note 0 à 20") );
// }while( note < 0 || note > 20 );

// si note [0, 8] => médiocre
// si note [9, 11] => passable
// si note [12, 15] => bien
// si note > 15 => très bien

let tab = [5, -3, 4, 2]; // types : numérique, string, boolean

let min = Math.abs( tab[0] );

for(let i=0; i<tab.length; i++){
    if( Math.abs(tab[i]) < Math.abs(min) ){
        min = tab[i];
    }
}

console.log(min);




