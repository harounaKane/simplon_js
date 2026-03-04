import { Livre } from "./Livre.js";
import { LivreManager } from "./LivreManger.js";

export class Emprunt{

    constructor(){
        this.livres = [];
        this.livreManager = new LivreManager();
    }

    addLivre(livre){
        this.livres.push( livre );
        this.save();
    }

    retournerLivre(id){
        let idx = this.livres.findIndex(livre => livre.id == id);

        if( idx !== -1 ){ 
            this.livres.splice(idx, 1);
            return true;
        }

        throw new Error("Pas de livre avec cet id: " + id);
    }

    getLivreById(id){
        return this.livres.find(livre => livre.id == id);
    }

    removeLivre(id){
        let idx = this.livres.findIndex(l => l.id == id);

        if( idx !== -1 ){
            this.livres.splice(idx, 1);
            this.save();
        }
    }


    save(){
        localStorage.setItem("emprunt", JSON.stringify( this.livres.map(l => l.toJson()) ) );        
    }

    load(){
        let data = JSON.parse( localStorage.getItem( "emprunt") ) || [];
        this.livres = data.map(l => new Livre(l));
        return this.livres;
    }
}