import { USER } from "../core/constants.js";
import { generetId, minLen, toDate } from "../utils/utils.js";

export class User{
    #id;
    #name;
    #login;
    #mdp;
    #createdAt;

    constructor({id, name, login, mdp, createdAt}){
        if( !minLen(login, 4, 8) ) throw new Error(`Login entre 4 et 8 caractères`);
        if( !minLen(mdp, 4) ) throw new Error("Mot de passe mini 4 caractères");

        this.#id = id || generetId();
        this.name = name;
        this.#login = login;
        this.#mdp = mdp;
        this.#createdAt = toDate(createdAt);
    }

    get id(){return this.#id;}
    get name(){return this.#name;}
    get login(){return this.#login;}
    get mdp(){return this.#mdp;}
    get createdAt(){return this.#createdAt;}
    localDate(){return this.#createdAt.toLocaleString();}

    set name(name){
        if( !minLen(name) ) throw new Error(`Nom trop court min ${USER.MIN_LEN_NAME} caractères`);
        this.#name = name;
    }

    toJson(){
        return {
            id: this.#id,
            name: this.#name,
            login: this.#login,
            mdp: this.#mdp,
            createdAt: this.#createdAt
        }
    }


}