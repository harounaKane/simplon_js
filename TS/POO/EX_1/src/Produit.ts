export class Produit{
   
    constructor(private _name: string, private _price: number){
        this.price = _price;
     }

    get name(): string{ return this._name;}
    get price(): number{ return this._price;}

    set name(name: string){this._name = name;}
    set price(price: number){ 
        if( price < 0 ) throw new Error("prix négatif");    
        this._price = price;
    }

    toString():string{
        return `Libellé: ${this._name},  prix: ${this._price}`;
    }
}