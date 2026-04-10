import Matiere from "../models/Matiere.js";
import Prof from "../models/Prof.js";

export const getMatieres = async (req, res) => {
  try {
    const matieres = await Matiere.findAll({
      include: { model: Prof, as: "prof" },
    });

    res.status(200).json({ total: matieres.length, matieres });
  } catch (error) {
    res.status(404).json({ erreur: error.message });
  }
};

export const createMatiere = async (req, res) => {
  try {
    const { nom, description, duree, idProf } = req.body;

    const matiere = await Matiere.create({ nom, description, duree, idProf });

    res.status(200).json(matiere);
  } catch (error) {
    res.status(404).json({ erreur: error.message });
  }
};

export const updateMatiere = async (req, res) => {
  try {
    const matiere = await Matiere.findByPk(req.params.id);

    if (!matiere)
      return res.status(404).json({ erreur: "Pas de matière avec cet id" });

    const { nom, description, duree, idProf } = req.body;

    await matiere.update({ nom, description, duree, idProf });

    res.status(200).json(matiere);
  } catch (error) {
    res.status(404).json({ erreur: error.message });
  }
};

export const delMatiere = async (req, res) => {
  try {
    const mat = await Matiere.findByPk(req.params.id);

    if (!mat)
      return res.status(404).json({ erreur: "pas de matière avec cet id" });

    await mat.destroy();

    res.status(200).json({ erreur: `La matière ${mat.nom} est supprimée !` });
  } catch (error) {
    res.status(404).json({ erreur: error.message });
  }
};
