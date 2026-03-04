import { PRODUCT } from "../core/constants.js";
import { generetId, inRange, minLen, toDate } from "../utils/utils.js";

export class Product{
    #id;
    #name;
    #price;
    #stock;
    #createdAt;

    constructor({id, name, price, stock, createdAt}){
        if( !minLen(name) ) throw new Error(`product name ${PRODUCT.MIN_LEN_NAME} caractères minim`);
        if( !inRange(price) ) throw new Error(`Prix entre ${PRODUCT.MIN_RANGE_PRICE} et ${PRODUCT.MAX_RANGE_PRICE}`);
        if( !inRange(stock, 0, Number.MAX_SAFE_INTEGER) ) throw new Error("Le stock ne peut être négatif");

        this.#id = id || generetId();
        this.#name = name;
        this.#price = price;
        this.#stock = stock;
        this.#createdAt = toDate(createdAt);
    }

    increseStock(qty){
        if( !Number(qty) || qty < 1 ) throw new Error("quantité incorrecte");

        this.#stock += Number( qty );
    }

    decreaseStock(qty){
        if( !Number(qty) || qty < 1) throw new Error("quantité incorrecte");
        if( Number(qty) > this.#stock ) throw new Error("Stock insuffisant");

        this.#stock -= Number( qty );        
    }

    get id(){return this.#id;}
    get name(){return this.#name;}
    get price(){return this.#price;}
    get stock(){return this.#stock;}
    get createdAt(){return this.#createdAt;}
    
    localDate(){return this.#createdAt.toLocaleString();}
}