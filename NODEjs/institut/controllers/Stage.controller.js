import Stage from "../models/Stage.js";

export const getStages = async (req, res) => {
  try {
    const stages = await Stage.findAll();

    res.status(200).json({ total: stages.length, stages });
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
// 2026-04-08 08:24:11
