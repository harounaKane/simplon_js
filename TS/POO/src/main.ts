import { ProdDerive } from "./ProdDerive.js";
import { Produit } from "./Produit.js";

const p = new Produit("Pc", 300);
const pp = new ProdDerive("Souris", 30, 0);
 
console.log(p.toString());
console.log(pp.toString());