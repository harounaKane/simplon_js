import { genererId, isValide } from "./utils.js";

export class Task{

    #id;
    #titre;
    #description;
    #statut;
    #couleur;
    #createdAt;

    static STATUT_AUTORISE = {
        "à faire": "primary", 
        "en cours": "warning", 
        "terminée": "success", 
        "bloquée": "danger"
    };

    constructor({id, titre, description = "", statut, createdAt = ""}){

        if( !isValide(titre) ) throw new Error("Titre ne peut être vide!");
        if( !Task.statuts(statut) ) throw new Error("Statut non autorisé !");

        this.#id = id || genererId();
        this.#titre = titre;
        this.#description = description;
        this.#statut = statut;
        this.#couleur = Task.STATUT_AUTORISE[this.#statut];        

        if( createdAt instanceof Date ){
            this.#createdAt = createdAt;
        }else if( typeof createdAt == "string" && createdAt.trim() != 0 ){
            this.#createdAt = new Date(createdAt);
        }else{
            this.#createdAt = new Date();
        }
    }

    toJson(){
        return {
            id: this.#id,
            titre: this.#titre,
            description: this.#description,
            statut: this.#statut,
            createdAt: this.#createdAt,
            couleur: this.#couleur
        }
    }

    static statuts(statut){
        return statut in Task.STATUT_AUTORISE;
    }

    get id(){return this.#id;}
    get titre(){return this.#titre;}
    get description(){return this.#description;}
    get statut(){return this.#statut;}
    get createdAt(){return this.#createdAt;}
    get couleur(){return this.#couleur = Task.STATUT_AUTORISE[this.#statut];}

    set titre(titre){
        if( !isValide(titre) ) throw new Error("Titre ne peut être vide!");

        this.#titre = titre;
    }

    set description(description){
        this.#description = description;
    }

    set statut(newStatut){
        if( !Task.statuts(newStatut) ) throw new Error("Statut non autorisé !");

        this.#statut = newStatut;
        this.#couleur = Task.STATUT_AUTORISE[this.#statut];
    }
}