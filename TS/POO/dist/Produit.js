export class Produit {
    _name;
    _price;
    constructor(_name, _price) {
        this._name = _name;
        this._price = _price;
        this.price = _price;
    }
    get name() { return this._name; }
    get price() { return this._price; }
    set name(name) { this._name = name; }
    set price(price) {
        if (price < 0)
            throw new Error("prix négatif");
        this._price = price;
    }
    toString() {
        return `Libellé: ${this._name},  prix: ${this._price}`;
    }
}
