import { Produit } from "./Produit.js";
export class ProdDerive extends Produit {
    _promo;
    constructor(name, price, _promo) {
        super(name, price);
        this._promo = _promo;
        this._promo = _promo;
    }
    toString() {
        return `${super.toString()}, Promo: ${this._promo}`;
    }
    get promo() { return this._promo; }
}
