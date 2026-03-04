import { Voiture } from "./Voiture.js";
import { VoitureTurbo } from "./VoitureTurbo.js";
const voiture = new Voiture({ marque: "Opel", vitesse: 0 });
voiture.accelerer();
console.log(voiture);
const vt = new VoitureTurbo({ marque: "Dacia", vitesse: 0 });
vt.turbo();
console.log(vt);
