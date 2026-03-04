import { Produit } from "./Produit.js";

export class ProdDerive extends Produit{
    constructor(name: string, price: number, private _promo: number){
        super(name, price);
        this._promo = _promo;
    }

    toString(): string {
        return `${super.toString() }, Promo: ${this._promo}`;
    }

    get promo():number{return this._promo;}
}