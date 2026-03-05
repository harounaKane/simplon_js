import { CompteBancaire } from "./CompteBancaire.js";
export class CompteAvecDecouvert extends CompteBancaire {
    decouvertAutorise;
    constructor(numero, titulaire, solde, decouvert) {
        super(numero, titulaire, solde);
        this.decouvertAutorise = decouvert;
    }
    retirer(montant) {
        if (montant < 10)
            throw new Error("montant trop petit");
        if (this.solde + this.decouvertAutorise < montant)
            throw new Error("montant supérieur au decouvert autorisé !");
        this._solde -= montant;
    }
}
