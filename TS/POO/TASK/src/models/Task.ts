import { Identifiant } from "../interface/Identifiant.js";

export class Task implements Identifiant{
    _id: number;
    private _title: string; 
    private _completed: boolean;

    constructor(id: number, title: string, completed: boolean){
        this._id = id;
        this._title = title;
        this._completed = completed;
    }

    toggle(){
        this._completed = !this._completed;
    }

    get id(){return this._id;}
    get title(){return this._title;}
    get completed(){return this._completed;}

}
