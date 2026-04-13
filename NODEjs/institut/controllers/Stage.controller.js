import Etudiant from "../models/Etudiant.js";
import Matiere from "../models/Matiere.js";
import Stage from "../models/Stage.js";

export const getStages = async (req, res) => {
  try {
    const stages = await Stage.findAll({
      include: [
        { model: Matiere, as: "matieres" },
        { model: Etudiant, as: "etudiants" },
      ],
    });

    res.status(200).json({ total: stages.length, stages });
  } catch (error) {
    res.status(404).json({ erreur: error.message });
  }
};

export const getStage = async (req, res) => {
  try {
    const stage = await Stage.findByPk(req.params.id, {
      include: [
        { model: Matiere, as: "matieres" },
        { model: Etudiant, as: "etudiants" },
      ],
    });

    if (!stage)
      return res.status(500).json({ erreur: "pas de stage avec cet id !" });

    res.status(200).json(stage);
  } catch (error) {
    res.status(404).json({ erreur: error.message });
  }
};

export const createStage = async (req, res) => {
  try {
    const { nom, debut, fin, description } = req.body;

    const stage = await Stage.create({ nom, debut, fin, description });

    res.status(200).json(stage);
  } catch (error) {
    res.status(404).json({ erreur: error.message });
  }
};

export const updateStage = async (req, res) => {
  try {
    const stage = await Stage.findByPk(req.params.id);

    if (!stage)
      return res.status(500).json({ erreur: "pas de stage avec cet id !" });
    const { nom, debut, fin, description } = req.body;

    await stage.update({ nom, debut, fin, description });

    res.status(200).json(stage);
  } catch (error) {
    res.status(404).json({ erreur: error.message });
  }
};

export const deleteStage = async (req, res) => {
  try {
    const stage = await Stage.findByPk(req.params.id);

    if (!stage)
      return res.status(500).json({ erreur: "pas de stage avec cet id !" });

    await stage.destroy();

    res.status(200).json(`le stage ${stage.nom} est supprimé !`);
  } catch (error) {
    res.status(404).json({ erreur: error.message });
  }
};

export const addMatiere = async (req, res) => {
  const stage = await Stage.findByPk(req.params.id);
  if (!stage) return res.status(404).json({ erreur: `Stage introuvable.` });

  await stage.addMatieres(req.body.matiereId);
  res.json({ message: "Matière ajoutée." });
};

// POST inscrire des étudiants à un stage
export const inscrireEtudiant = async (req, res) => {
  try {
    const stage = await Stage.findByPk(req.params.id);
    if (!stage)
      return res
        .status(404)
        .json({ erreur: `Stage ${req.params.id} introuvable.` });

    const { etudiantIds } = req.body;
    await stage.addEtudiants(etudiantIds);

    const result = await Stage.findByPk(req.params.id, {
      include: [
        { model: Matiere, as: "matieres" },
        { model: Etudiant, as: "etudiants" },
      ],
    });
    res.json(result);
  } catch (error) {
    res.status(500).json({ erreur: error.message });
  }
};

//  DELETE retirer un étudiant d'un stage
export const deleteEtudiant = async (req, res) => {
  console.log(req.params.etudiantId);

  try {
    const stage = await Stage.findByPk(req.params.etudiantId);
    if (!stage)
      return res
        .status(404)
        .json({ erreur: `Stage ${req.params.etudiantId} introuvable.` });

    await stage.removeEtudiant(req.params.etudiantId);
    res.json({ message: "Etudiant retiré du stage avec succès." });
  } catch (error) {
    res.status(500).json({ erreur: error.message });
  }
};
