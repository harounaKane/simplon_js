import { Livre } from "./Livre.js";

export class LivreManager{
    #livres = [];

    addLivre(livre){
        if(!(livre instanceof Livre) ) throw new Error("Il faut une instance de Livre");
        // si le livre est déjà ajouter, on n'ajoute pas de nouveau
        if( this.getLivreById(livre.id) ) throw new Error("Ce livre existe déjà");

        this.#livres.push(livre);
    }

    getLivreById(id){
        return this.#livres.find(livre => livre.id == id);
    }

    removeLivre(id){
        let idx = this.#livres.findIndex(livre => livre.id == id);

        if( idx !== -1 ){ 
            this.#livres.splice(idx, 1);
            return true;
        }

        return false;
    }

    rechercherParTitre(motCle){
        return this.#livres.filter(livre => livre.titre.toLowerCase().includes(motCle));
    }

    countDisponibles(){
        return this.#livres.filter(l => l.disponibilite).length;
    }

    save(key){
        localStorage.setItem(key, JSON.stringify( this.#livres.map(l => l.toJson()) ) );        
    }

    load(key){
        let data = JSON.parse( localStorage.getItem( key) ) || [];
        this.#livres = data.map(l => new Livre(l));
        return this.#livres;
    }

    get livres(){return this.#livres}
}