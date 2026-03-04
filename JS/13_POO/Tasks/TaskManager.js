import { Task } from "./Task.js";
import { read, save } from "./utils.js";

export class TaskManager{
    #tasks;
    #storeKey;

    constructor(storeKey = "task"){
        this.#tasks = [];
        this.#storeKey = storeKey;
    }

    
    ajouter(task){
        if( !(task instanceof Task) ) throw new Error(`${task} n'est pas une instance de Task`);

        this.#tasks.push( task );
        save(this.#storeKey, this.#tasks);
    }


    lire(){
        return this.#tasks;
    }


    load(){
        let tasks = read(this.#storeKey);
        this.#tasks = tasks.map(task => new Task(task));

        return this.#tasks;
    }


    update(id, taskToUp){
        let task = this.load().find(t => t.id == id);

        if( task ){
            task.titre = taskToUp.titre;
            task.description = taskToUp.description;
            task.statut = taskToUp.statut;

            save(this.#storeKey, this.#tasks);  
        }              
    }


    supprimer(id){
        let pos = this.#tasks.findIndex(task => task.id == id);
        if( pos != -1 ){
            this.#tasks.splice(pos, 1);
            save(this.#storeKey, this.#tasks);
        }

        return pos != 1;        
    }


    lireTask(id){
        return this.#tasks.find(task => task.id == id);
    }


    filter(statut){
        if( statut == "toutes" ) return;

        return this.#tasks.filter(task => task.statut == statut);
    }


    rechercher(text){
        if( text.trim() != "" ){
            let lower = text.toLowerCase();
            return this.#tasks.filter(task => 
                task.titre.toLowerCase().includes(lower) || 
                task.description.toLowerCase().includes(lower)
            );
        }
    }


    drag(fromCard, toCard){
        let posFrom = this.#tasks.findIndex(task => task.id == fromCard);
        let posTo = this.#tasks.findIndex(task => task.id == toCard);

        [this.#tasks[posFrom],this.#tasks[posTo]] = [this.#tasks[posTo], this.#tasks[posFrom]];

        save(this.#storeKey, this.#tasks);
    }
}