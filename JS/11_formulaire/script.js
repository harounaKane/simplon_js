let sel = elem => document.querySelector(elem);

let form = sel("form");
let nom = sel("#nom");
let mail = sel("#email");
let niveau = sel("#niveau");

function checkSports(sports){
    return sports.length >= 2;    
}

function checkNom(nom){
    return nom.trim() != "";
}

function checkMail(mail){
    let check = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return check.test(mail);
}

function checkNiveau(niveau){
    return niveau;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    document.querySelectorAll(".erreur").forEach(err => err.innerHTML = "");
    document.querySelectorAll(".input_erreur").forEach(err => err.classList.remove("input_erreur"));

    let nomValue = nom.value.trim();
    let maiValue = mail.value.trim();
    let niveauValue = niveau.value;
    let comment = sel("#comment").value;
    let sports = document.querySelectorAll("input[name='sports']:checked");


    let isValid = true;

    if( !checkNom(nomValue) ){
        isValid = false;
        sel("#errNom").textContent = "Le nom est requis";
        nom.classList.add("input_erreur");

    }

    if( !checkMail(maiValue) ){
        isValid = false;
        sel("#errMail").textContent = "Le mail n'est pas valide ... ";
        mail.classList.add("input_erreur");
    }

    if( !checkNiveau(niveauValue) ){
        isValid = false;
        sel("#errNiveau").textContent = "Veuillez selectionner une option ... ";
        niveau.classList.add("input_erreur");
    }

    if( !checkSports(sports) ){
        isValid = false;
        sel("#errSports").textContent = "Veuillez selectionner 2 sports ... ";
    }
    
    let sportsValues = [...sports].map(sport => sport.value);
    // for(let sport of sports){
    //     sportsValues += sport.value +" ";
    // }
    
    if( isValid ){
        //form.submit();

        sel("#msg").innerHTML = `
            <h2>Récap</h2>
            <div><strong>Nom : </strong>${nomValue}</div>
            <div><strong>E-mail : </strong>${maiValue}</div>
            <div><strong>Niveau : </strong>${niveauValue}</div>
            <div><strong>Sports : </strong>${sportsValues.join(",")}</div>
            <div><strong>Commentaire : </strong>${comment}</div>
        `;

        sel("#msg").classList.add("recap");
        
    }    
    
});

// BARRE DE PROGRESSION

nom.addEventListener( "input", majBarre );
mail.addEventListener( "input", majBarre );
niveau.addEventListener( "change", majBarre );
niveau.addEventListener( "input", majBarre );

document.querySelectorAll("input[name='sports']").forEach(sport => addEventListener("input", majBarre));


function majBarre(){
    let compteur = 0;
    let champForm = 4;
    
    let sports = document.querySelectorAll("input[name='sports']:checked");

    if( checkNom(nom.value) ) compteur++;
    if( checkMail(mail.value) ) compteur++;
    if( checkNiveau(niveau.value) ) compteur++;
    if( checkSports(sports) ) compteur++;

    sel(".progression").style.opacity = 1;
    sel(".progression").style.width = ( compteur / champForm ) * 100 +"%";
}
