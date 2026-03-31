import { etudiantsData } from "../data/FakeData";
import { Etudiant } from "../model/Etudiant";

class EtudiantService {
  constructor() {
    this.etudiants = etudiantsData;
  }

  getAll() {
    return this.etudiants;
  }

  add(data) {
    const etudiant = new Etudiant(
      Date.now(),
      data.nom,
      data.email,
      data.telephone,
    );

    this.etudiants.push(etudiant);
  }

  update(id, data) {
    const etudiant = this.getById(id);

    if (etudiant) {
      etudiant.nom = data.nom;
      etudiant.email = data.email;
      etudiant.telephone = data.telephone;
    }

    return etudiant;
  }

  getById(id) {
    return this.etudiants.find((etudiant) => etudiant.id_etudiant == id);
  }

  remove(id) {
    this.etudiants = this.etudiants.filter(
      (etudiant) => etudiant.id_etudiant != id,
    );
  }
}

export default new EtudiantService();
