export class CartItem{
    #product;
    #quantity;

    constructor({product, quantity}){
        if( quantity < 1 ) throw new Error("Quantié erronée!");

        this.#product = product;
        this.#quantity = quantity;
    }

    subtotal(){return this.#product.price * this.#quantity;}
    setQuantity(qty){
        let q = Number(qty);
        if( !Number.isInteger(qty) || q < 1 ) throw new Error("Quantié erronée!");

        this.#quantity = q;
    }

    inc(){
        return this.setQuantity(this.#quantity + 1);
    }

    dec(){
        return this.setQuantity(this.#quantity - 1);
    }

    get product(){return this.#product;}
    get quantity(){return this.#quantity;}
}