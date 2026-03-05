export class CompteBancaire {
    numero;
    titulaire;
    _solde;
    constructor(numero, titulaire, solde) {
        this.numero = numero;
        this.titulaire = titulaire;
        this._solde = solde;
    }
    deposer(montant) {
        if (montant < 10)
            throw new Error("montant trop petit");
        this._solde += montant;
    }
    retirer(montant) {
        if (montant < 10)
            throw new Error("montant trop petit");
        if (this._solde < montant)
            throw new Error("montant supérieur au solde");
        this._solde -= montant;
    }
    get solde() { return this._solde; }
}
