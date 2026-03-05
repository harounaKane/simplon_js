import { CompteAvecDecouvert } from "./CompteAvecDecouvert.js";
const cb = new CompteAvecDecouvert("comp_210", "Julie", 2000, 500);
console.log(cb.solde);
cb.retirer(2010);
console.log(cb.solde);
cb.retirer(490);
cb.retirer(10);
console.log(cb.solde);
