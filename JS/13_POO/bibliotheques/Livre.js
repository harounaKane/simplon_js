export class Livre{
    #id;
    #titre;
    #auteur;
    #disponibilite;

    constructor({id, titre, auteur, disponibilite = true}){
        this.#id = id || this.generateId();
        this.titre = titre;
        this.auteur = auteur;
        this.#disponibilite = disponibilite;
    }

    generateId(){
        let r = Math.ceil( Math.random() * 100000000 + 100000000 );


        return r;
    }

    rendreIndisponible(){
        this.#disponibilite = false;
    }

    rendreDisponible(){
        this.#disponibilite = true;
    }

    valideString(str){        
        if( typeof str !== "string" || str.trim().length < 2 )
            throw new Error("Longeur mini 2 caractère");

        return str.trim();
    }

    get id(){return this.#id;}
    get titre(){return this.#titre;}
    get auteur(){return this.#auteur;}
    get disponibilite(){return this.#disponibilite;}

    set titre(titre){
        this.#titre = this.valideString(titre);
    }

    set auteur(auteur){
        this.#auteur = this.valideString(auteur);
    }

    set disponibilite(disponibilite){this.#disponibilite = disponibilite;}

    toString(){
        return `id: ${this.#id}, titre: ${this.#titre}, auteur: ${this.#auteur}, disponibilité: ${this.#disponibilite ? "OUI" : "NON"}`;
    }

    toJson(){
        return {
            id: this.#id,
            titre: this.#titre,
            auteur: this.#auteur,
            disponibilite: this.#disponibilite
        }
    }
}