import { LivreManager } from "./LivreManger.js";

export class Bibliotheque{
    #livreManager;

    constructor(name){
        this._name = name;
        this.#livreManager = new LivreManager();
        this.#livreManager.load(this._name);
    }

     addLivre(livre){        
        this.#livreManager.addLivre(livre);
        this.#livreManager.save(this._name);
    }

    getLivreById(id){
        return this.#livreManager.getLivreById(id);
    }

    getLivreId(){
        return this.#livreManager.livres.map(l => l.id);
    }

    retirerLivre(id){
        this.#livreManager.removeLivre(id);
        this.#livreManager.save(this._name);
    }

    emprunterLivre(id){
        let livre = this.#livreManager.getLivreById(id);

        if( livre ){
            if(!livre.disponibilite) throw new Error("Ce livre n'est pas dispo! ");

            livre.rendreIndisponible();
            this.#livreManager.save(this._name);
            return livre;
        }

        return false;
    }

    retournerLivre(id){
        let livre = this.#livreManager.getLivreById(id);

        if( livre ){
            if(livre.disponibilite) throw new Error("Ce livre est déjà dans la biblio ");

            livre.rendreDisponible();
            this.#livreManager.save(this._name);
            return livre;
        }

        throw new Error("Pas de livre avec cet id: " + id);
    }

    afficherCatalogue(){
        return this.#livreManager.load(this._name);
    }

    rechercherLivre(motCle){
        return this.#livreManager.rechercherParTitre(motCle);
    }

    get livreManager(){return this.#livreManager;}

}