import { Task } from "./Task.js";

export class PriorityTask extends Task{
    private _priority: number = 1;

    constructor(id: number, title: string, completed: boolean, priority: number){
        super(id, title, completed);
        this.priority = priority;
    }

    get priority(): number{return this._priority;}

    set priority(priority: number){
        if( priority < 1 || priority > 5 ) throw new Error("La prioritéest de 1 à 5");

        this._priority = priority;
    }

}