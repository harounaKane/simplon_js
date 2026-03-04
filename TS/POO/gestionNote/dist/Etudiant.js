export class Etudiant {
    _id;
    _nom;
    constructor(id, nom) {
        this._id = id;
        this._nom = nom;
    }
    get nom() { return this._nom; }
    get id() { return this._id; }
}
