import { CompteBancaire } from "./CompteBancaire.js";

export class CompteAvecDecouvert extends CompteBancaire{
    decouvertAutorise: number;

    constructor(numero: string, titulaire: string, solde: number, decouvert: number){
        super(numero, titulaire, solde);
        this.decouvertAutorise = decouvert;
    }

    override retirer(montant: number): void {
        if( montant < 10 ) throw new Error("montant trop petit");
        if( this.solde + this.decouvertAutorise < montant ) throw new Error("montant supérieur au decouvert autorisé !");

        this._solde -= montant;
    }
}