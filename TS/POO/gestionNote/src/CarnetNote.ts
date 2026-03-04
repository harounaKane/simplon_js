
export class CarnetNote{
    noteEtudiant = new Map<number, number[]>;

    ajouterNote(idEtudiant: number, note: number): void{
        if( note < 0 || note > 20 )throw new Error("La note doit être comprise entre 0 et 20");

        const notes = this.noteEtudiant.get(idEtudiant) || [];
        notes.push(note);
    }

    moyenne(idEtudiant: number): number{
        const notes = this.noteEtudiant.get(idEtudiant) || [];
        return notes.reduce((a, c) => a+c, 0) / notes.length;
    }

    moyenneClasse(): number{

        let toutesNotes: number[] = [];

        for(let notes of this.noteEtudiant.values()){
            toutesNotes.push( ...notes );
        }

        if( toutesNotes.length == 0 ) return 0;

        const moyenne: number = Number((toutesNotes.reduce((a, c) => a+c, 0) / toutesNotes.length).toFixed(2));
        return moyenne;
    }

}