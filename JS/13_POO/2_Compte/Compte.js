class Compte{
    #numero;
    #solde;
    #titulaire;

    static compteur = 100;

    constructor({numero= null, solde = 100, titulaire}){
      this.#numero = numero || this.genererId();
      this.solde = solde;
      this.#titulaire = titulaire;
    }

    genererId(){
        let now = new Date();
        const id = now.getFullYear() + "" +
                    (now.getMonth() + 1) + 
                    now.getDate() +
                    now.getHours() +
                    now.getMinutes() + 
                    now.getSeconds() +
                    now.getMilliseconds();

        return id;
    }

    static nombreCompte(){
        return Compte.compteur;
    }

    deposer(montant){
        if( montant < 20 ){
            throw new Error("Dépot à partir de 20€ !!")
        }
        this.#solde += montant;
    }

    retirer(montant){
        if( montant < 20 || (this.#solde - montant < 0) ){
            throw new Error("Retrait impossible. solde négatif !!")
        }
        
        this.#solde -= montant;
      
    }

    virerVers(destinataire, montant){
        try{
            this.retirer(montant);
            destinataire.deposer(montant);
        }catch(err){
            throw new Error("Virement pas effectué !!");
        }
    }

    get numero(){return this.#numero;}
    get solde(){return this.#solde;}
    get titulaire(){return this.#titulaire;}

    set numero(numero){
        this.#numero = numero;
    }

    set solde(solde){
        if( isNaN(solde) ) this.#solde = 0
        else this.#solde = solde;
    }

    set titulaire(titulaire){
        this.#titulaire = titulaire;
    }
}