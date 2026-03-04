import { CarnetNote } from "./CarnetNote.js";
import { Etudiant } from "./Etudiant.js";

const e1 = new Etudiant(10, "Loan");
const e2 = new Etudiant(15, "Jean");

console.log(e1);


const notes = new CarnetNote();
 notes.noteEtudiant.set(e1.id, [15, 10, 14.3]);
 notes.noteEtudiant.set(e2.id, [18]);
notes.ajouterNote(e2.id, 10)

console.log("Moyenne: " + notes.moyenne(e1.id));
console.log("Moyenne: " + notes.moyenne(e2.id));

console.log("Moyenne classe : " + notes.moyenneClasse());
;
