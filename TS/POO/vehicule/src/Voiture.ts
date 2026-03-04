import { Contrat } from "./Contrat.js";

interface Vehicule {
    marque: string,
    vitesse: number
};

export class Voiture implements Contrat{
    _id: string;
    protected _marque:string;
    protected _vitesse:number;

    constructor({marque, vitesse}: Vehicule){
        this._id = "id_vi";
        this._marque = marque;
        this._vitesse = vitesse;
    }

    toString(): string {
        return this._marque + " "+ this._vitesse;
    }

    get marque():string{return this._marque;}
    get vitesse():number{return this._vitesse;}

    set vitesse(vitesse){
        this._vitesse = vitesse;
    }

    accelerer(){
        this._vitesse  += 20;
    }
}