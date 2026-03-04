let compteur = 0;
const qs = (sel) => document.querySelector(sel);
const prenom = qs("#prenom");
const age = qs("#age");
const btnAf = qs("#btnAfficher");
const msg = qs("#msg");
const item = qs("#item");
const btnAdd = qs("#btnAjouter");
const ul = qs("#liste");
if (!prenom ||
    !age ||
    !btnAf ||
    !msg ||
    !item ||
    !btnAdd ||
    !ul)
    throw new Error("Un élément du DOM est manquant!");
btnAf.addEventListener("click", () => {
    const p = prenom.value.trim();
    const a = Number(age.value);
    if (p.length <= 0) {
        msg.textContent = "Prénom ne peut être vide !";
        return;
    }
    if (Number.isNaN(a)) {
        msg.textContent = "Âge doit être numérique !";
        return;
    }
    msg.textContent = formatMessage(p, a);
    prenom.value = "";
    age.value = "";
    prenom.focus();
});
function formatMessage(prenom, age) {
    return `Bonjour ${prenom}, tu as ${age} ans.`;
}
btnAdd.addEventListener("click", liste);
item.addEventListener("keydown", (e) => {
    if (e.key == "Enter")
        liste();
});
function liste() {
    const itemValue = item.value.trim();
    if (itemValue.length <= 0) {
        alert("Item ne peut être vide !");
        return;
    }
    compteur = incrementer(compteur);
    qs("#nbr").textContent = `${compteur} élément(s)`;
    const li = document.createElement("li");
    li.textContent = itemValue;
    ul.appendChild(li);
    item.value = "";
    item.focus();
    li.addEventListener("click", () => {
        li.remove();
        qs("#nbr").textContent = `${--compteur} élément(s)`;
    });
}
function incrementer(val) {
    return val + 1;
}
