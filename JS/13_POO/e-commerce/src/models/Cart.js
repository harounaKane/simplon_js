import { CartItem } from "./CartItem.js";

export class Cart{
    #user;
    #items; // items = [{product: p1, quantity: 1}, p2, p3, p4];

    constructor({user, items = []}){

        this.#user = user;
        this.#items = items.map(i => i);
    }

    findItem(productId){
        return this.#items.find(item => item.id == productId);
    }

    addProduct(product, quantity){
        let p = this.findItem(product.id);
        if( p ){
            p.setQuantity( p.quantity + quantity );
            return p;
        }

        let cartItem = new CartItem({product, quantity});
        this.#items.push( cartItem );
        return cartItem;
    }

    removeProduct(productId){
        let idx = this.#items.findIndex(p => p.id == productId);
        if( idx == -1 ) return false;

        this.#items.splice(idx, 1);
        return true;
    }

    updateQuantity(productId, quantity){
        let item = this.findItem(productId);

        if( !item ) return undefined;

        item.setQuantity(quantity);
        return item;
    }

    clear(){
        this.#items = [];
    }

    total(){
       return this.#items.reduce((acc, item) => acc + item.subtotal(), 0);
       //  return this.#items.reduce((acc, item) => acc + item.product * item.quantity, 0);
    }

    countItems(){
       return this.#items.reduce((acc, item) => acc + item.quantity, 0);
    }
}