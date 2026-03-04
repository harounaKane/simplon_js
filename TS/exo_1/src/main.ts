let compteur: number = 0;

const qs = <T extends HTMLElement>(sel: string): T => document.querySelector(sel);

const prenom: HTMLInputElement = qs("#prenom");
const age: HTMLInputElement = qs("#age");
const btnAf: HTMLButtonElement = qs("#btnAfficher");

const msg: HTMLParagraphElement = qs("#msg");

const item: HTMLInputElement = qs("#item");
const btnAdd: HTMLButtonElement = qs("#btnAjouter");
const ul: HTMLUListElement = qs("#liste");


if( !prenom ||
    !age ||
    !btnAf ||
    !msg ||
    !item ||
    !btnAdd ||
    !ul
 ) throw new Error("Un élément du DOM est manquant!");


 btnAf.addEventListener("click", () => {    
    
    const p = prenom.value.trim();
    const a = Number(age.value);

    if( p.length <= 0 ){
        msg.textContent = "Prénom ne peut être vide !";
        return;
    }
    if( Number.isNaN(a) ){
        msg.textContent = "Âge doit être numérique !";
        return;
    }
    
    msg.textContent = formatMessage(p, a);
    prenom.value = "";
    age.value = "";
    prenom.focus();
     
 });

function formatMessage(prenom: string, age: number): string{
    return `Bonjour ${prenom}, tu as ${age} ans.`;
}

btnAdd.addEventListener("click", liste);
item.addEventListener("keydown", (e) => {
    if( e.key == "Enter" ) liste();
});

function liste(){
    const itemValue = item.value.trim();

    if( itemValue.length <= 0 ){
        alert ("Item ne peut être vide !");
        return;
    }
    compteur = incrementer(compteur);
    qs("#nbr").textContent = `${compteur} élément(s)`;

    const li: HTMLLIElement = document.createElement("li");
    li.textContent = itemValue;

    ul.appendChild(li);
    item.value = "";
    item.focus();

    li.addEventListener("click", () => {
        li.remove();
        qs("#nbr").textContent = `${--compteur} élément(s)`;
    });
}

function incrementer(val: number): number{
    return val + 1;
}