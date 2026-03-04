import { Voiture } from "./Voiture.js";

export class VoitureTurbo extends Voiture{
    turbo(){
        this.accelerer();
        this.accelerer();
    }
} 