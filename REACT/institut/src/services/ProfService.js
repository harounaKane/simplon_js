import { profsData } from "../data/FakeData";
import Prof from "../model/Prof";
import api from "./api";

// export const getAllProf = () => api.get("/prof");

class ProfService {
  profs = profsData;

  async getAll() {
    const res = await api.get("/prof");

    return res.data;
  }

  getById(id) {
    return this.profs.find((p) => p.id === id);
  }

  async add(data) {
    //   const prof = new Prof(Date.now(), data.nom, data.email, data.spec);

    const res = await api.post("/prof", data);

    return res;
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

  async delete(id) {
    // this.profs = this.profs.filter((p) => p.id !== id);
    const res = await api.delete(`/prof/${id}`);

    return res;
  }
}

export default new ProfService();
