import { User } from "../models/User.js";
import { LocalStore } from "../services/localStore.js";

export class UserManager{
    #users = [];

    constructor(){
        this.#users = this.load();
    }
    
    add(user){
        // vérifie si 'user' est une instance du modeèle 'User'
        if( !(user instanceof User) ) throw new Error(`${user} doit être une instance de User`);

        // verification login
        if( this.getByLogin(user.login) ) throw new Error(`${user.login} existe déjà comme login`);

        this.#users.push(user);

        this.save();
    }

    getByLogin(login){
        return this.#users.some( u => u.login == login );
    }

    save(){
        const data = this.#users.map( u => u.toJson());
        LocalStore.save("user", data);   
    }

    load(){
        const data =  LocalStore.load("user");
        this.#users = data.map(u => new User(u));       
        
        return this.#users;
    }
}