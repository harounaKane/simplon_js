export class CompteBancaire{
    numero : string;
    titulaire : string;
    protected _solde : number;

    constructor(numero: string, titulaire: string, solde: number){
        this.numero = numero;
        this.titulaire = titulaire;
        this._solde = solde;
    }

    deposer(montant: number){
        if( montant < 10 ) throw new Error("montant trop petit");

        this._solde += montant;
    }

    retirer(montant: number){
        if( montant < 10 ) throw new Error("montant trop petit");
        if( this._solde < montant ) throw new Error("montant supérieur au solde");

        this._solde -= montant;
    }

    get solde(){return this._solde;}
}