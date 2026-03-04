export class Etudiant{
    private readonly _id: number;
    private _nom: string;

    constructor(id: number, nom: string){
        this._id = id;
        this._nom = nom;
    }

    get nom(){return this._nom;}
    get id(){return this._id;}
}