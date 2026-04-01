export default class Stage {
  constructor(
    id,
    nom,
    dateDebut,
    dateFin,
    description,
    etudiants = [],
    matieres = [],
  ) {
    this.id = id;
    this.nom = nom;
    this.dateDebut = dateDebut;
    this.dateFin = dateFin;
    this.description = description;
    this.etudiants = etudiants;
    this.matieres = matieres;
  }
}
