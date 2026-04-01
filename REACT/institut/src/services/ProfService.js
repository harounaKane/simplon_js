import { profsData } from "../data/FakeData";
import Prof from "../model/Prof";

class ProfService {
  profs = profsData;

  getAll() {
    return this.profs;
  }

  getById(id) {
    return this.profs.find((p) => p.id === id);
  }

  add(data) {
    const prof = new Prof(Date.now(), data.nom, data.email, data.spec);

    this.profs.push(prof);
    return prof;
  }

  update(id, data) {
    const prof = this.getById(id);
    if (prof) {
      prof.nom = data.nom ?? prof.nom;
      prof.email = data.email ?? prof.email;
      prof.spec = data.spec ?? prof.spec;
    }
    return prof;
  }

  delete(id) {
    this.profs = this.profs.filter((p) => p.id !== id);
  }
}

export default new ProfService();
