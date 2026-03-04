class Manager{
    #comptes = [];

    constructor(){
    }

    ajouter(compte){
        
        this.#comptes = this.read();
        
        let c = {
            numero: compte.numero,
            solde: compte.solde,
            titulaire: compte.titulaire
        };
        
        this.#comptes.push(c);
        console.log(this.#comptes)

        this.save(this.#comptes);
    }

    lire(numero){

    }

    lireComptes(){
        let comptesStore = this.read();
        let comptes = [];

        comptesStore.forEach(c => {
            comptes.push(  new Compte(c) );
        });

        return comptes;
    }

    supprimerUnCompte(numero){

    }

    supprimer(){

    }

    save(data){
        localStorage.setItem( "comptes", JSON.stringify(data) );
    }

    read(){
        return JSON.parse( localStorage.getItem("comptes") ) || [];
    }

    get comptes(){return this.#comptes;}
    set comptes(compte){
        this.#comptes = compte;
    }
}