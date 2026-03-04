import { save } from "./js/localStorage.js";

const o1 = {
    'prenom etudiant': "Toto",
    age: 30,
    ville: "Aix"
};

const o2 = o1; 

let tab = [o1, o2];


//console.log(tab.find(p => p.age < 30));

const t = new Set(tab);

const m = new Map();
m.set("a", 10);
console.log(m);

save