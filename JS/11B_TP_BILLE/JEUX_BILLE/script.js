
const qs =  elem => document.querySelector(elem);
const qsa = elem => document.querySelectorAll(elem);

let form = qs("form");
let bool = true;

let nombreBille;
//let coupPrecedant = 0;
let coup = 0;
let joueurActif = 0;
let joueur = [];


form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Remise à Zéro des erreurs
    qsa(".errMsg").forEach(el => { 
        el.textContent = "";
        el.classList.remove("alert");
    });

    nombreBille = Number(qs("#nbBille").value);

    // Données des Joueurs
    let pj1 = qs("#pj1").value.trim();
    let nj1 = qs("#nj1").value.trim();
    let pj2 = qs("#pj2").value.trim();
    let nj2 = qs("#nj2").value.trim();

    bool = true;

    // Teste validation des données joueurs

    if( !isValidName(pj1) ){
        notValidat("#errPJ1", "Le prénom pas valide");
    }

    if( !isValidName(nj1) ){
        notValidat("#errNJ1", "Nom pas valide");
    }

    if( !isValidName(pj2) ){
        notValidat("#errPJ2", "Le prénom pas valide");
    }

    if( !isValidName(nj2) ){
        notValidat("#errNJ2", "Nom pas valide");
    }

    if( !bool ) return; // si pas valide, on sort - pas de jeu

    // ajout des données joueurs dans le tableau
    joueur.push( 
        {prenom: pj1, nom: nj1, coup: [], somme: 0}, 
        {prenom: pj2, nom: nj2, coup: [], somme: 0} 
    );

    form.classList.add("d-none"); // on masque  le formulaire
    qs("#jeu").classList.remove("d-none"); // on affiche le bloc debut du jeu

    startGame();
});


qsa("button").forEach(btn => {
    btn.addEventListener("click", (e) => {
        coup = e.target.textContent; // recup la valeur du bouton
        
        nombreBille -= coup;
        
        // désactive tous les boutons
        btn.setAttribute("disabled", true);

        // boucle pour activer les boutons ... 
        qsa("button").forEach(btnActiv => {
            if( btnActiv.textContent !== coup ){
                // ... si valeur btn != coup
                btnActiv.removeAttribute("disabled");
            }
            // ...désactive si valeur bouton > au nombre de bille
            if( btnActiv.textContent > nombreBille ){
                btnActiv.setAttribute("disabled", true);
            }
        });

        history();
        winner();
        startGame();
        
    });
});

function history(){
    joueur[joueurActif].coup.push(coup);
    joueur[joueurActif].somme += Number(coup);
}

/**
 * Met à jour les billes restantes, coup précédent et affiche le prochain joueur
 */
function startGame(){
    qs("#reste").textContent = `Billes restantes : ${nombreBille}`;
    qs("#precedent").textContent = `Coup précédent : ${coup}`;
    qs("#actif").textContent = joueur[joueurActif].prenom;

    qs("#bille").textContent = "";

    for (let i = 0; i < nombreBille; i++) {
        qs("#bille").textContent += "🥎";
    }
}

/**
 * Vérifie si le jeu est teminé ou pas
 * @returns 
 */
function winner(){
    if( (nombreBille == 0) || (coup == 1 && nombreBille == 1) ){
        qs("#end").classList.remove("d-none");
        qs("#winner").textContent = joueur[joueurActif].prenom;
        
        
        qs("#j1").innerHTML = `<h4>${joueur[0].prenom}</h4>
                <div>coups : ${joueur[0].coup.join(",")}</div>
                <div>Total : ${joueur[0].somme}<div>
            `; 
        qs("#j2").innerHTML = `<h4>${joueur[1].prenom}</h4>
                <div>coups : ${joueur[1].coup.join(",")}</div>
                <div>Total : ${joueur[1].somme}<div>
            `;

        return;
    }

    // On met à jour le prochain joueur actif
    joueurActif = (joueurActif == 1) ? 0 : 1; // (joueurActif + 1) % joueur.length
}

/**
 * si données joueur pas valides, affiche message d'erreur et ajoute la class alert
 * @param {ElementHtml} selector 
 * @param {message à afficher} textMsg 
 */
function notValidat(selector, textMsg){
        bool = false;
        qs(selector).textContent = textMsg;
        qs(selector).classList.add("alert");
}

/**
 * renvoie vrai si nomJour >= 2 ou faux sinon
 * @param {nomJoueur} name 
 * @returns 
 */
function isValidName(name){
    return name.length >= 2;
}