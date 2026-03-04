;
export class Voiture {
    _id;
    _marque;
    _vitesse;
    constructor({ marque, vitesse }) {
        this._id = "id_vi";
        this._marque = marque;
        this._vitesse = vitesse;
    }
    toString() {
        return this._marque + " " + this._vitesse;
    }
    get marque() { return this._marque; }
    get vitesse() { return this._vitesse; }
    set vitesse(vitesse) {
        this._vitesse = vitesse;
    }
    accelerer() {
        this._vitesse += 20;
    }
}
