import { Identifiant } from "../interface/Identifiant.js";

export class Task implements Identifiant{
    _id: number;
    protected _title: string; 
    protected _completed: boolean;

    constructor(id: number, title: string, completed: boolean){
        this._id = id;
        this._title = title;
        this._completed = completed;
    }

    toggle(){
        this._completed = !this._completed;
    }

    getLabel(): string{
        return this._completed 
                ? `☑ ${this._title}` 
                : `☐ ${this._title}` ;
    }

    toJson(){
        return {
            id: this._id,
            title: this._title,
            completed: this._completed
        }
    }

    static fromJson(data: any): Task{
        return new Task(data.id, data.title, data.completed);
    }

    get id(){return this._id;}
    get title(){return this._title;}
    get completed(){return this._completed;}

}
