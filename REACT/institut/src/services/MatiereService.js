import { matieresData } from "../data/FakeData";
import api from "./api";

class MatiereService {
  matieres = matieresData;

  async getAll() {
    return (await api.get("/matiere")).data.matieres;
  }

  async getById(id) {
    return (await api.get(`/matiere/${id}`)).data;
  }

  async add(data) {
    const matiere = await api.post("/matiere", data);
    return matiere;
  }

  async update(id, data) {
    const res = await api.put(`/matiere/${id}`, data);
    return res;
  }

  async delete(id) {
    return await api.delete(`/matiere/${id}`);
  }

  getByProf(idProf) {
    return this.matieres.filter((m) => m.idProf === idProf);
  }
}

export default new MatiereService();
