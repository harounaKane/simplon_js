import { etudiantsData } from "../data/FakeData";

class EtudiantService {
  constructor() {
    this.etudiants = etudiantsData;
  }

  getAll() {
    return this.etudiants;
  }
}

export default new EtudiantService();
