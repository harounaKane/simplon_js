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

  getById(id) {
    return this.etudiants.find((etudiant) => etudiant.id_etudiant == id);
  }

  remove(id) {
    return this.etudiants.filter((etudiant) => etudiant.id_etudiant != id);
  }
}

export default new EtudiantService();
