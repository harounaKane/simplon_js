import api from "./api";

class EtudiantService {
  async getAll() {
    const res = await api.get("/etudiant");
    return res.data.etudiants;
  }
  async getById(id) {
    const res = await api.get(`/etudiant/${id}`);
    return res.data;
  }
  async add(data) {
    const res = await api.post("/etudiant", data);
    return res.data;
  }
  async update(id, data) {
    const res = await api.put(`/etudiant/${id}`, data);
    return res.data;
  }
  async delete(id) {
    const res = await api.delete(`/etudiant/${id}`);
    return res.data;
  }
}

export default new EtudiantService();
