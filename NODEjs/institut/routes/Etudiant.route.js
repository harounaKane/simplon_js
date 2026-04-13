import express from "express";
import Etudiant from "../models/Etudiant.js";
import Stage from "../models/Stage.js";

const router = express.Router();

// ─── GET tous les étudiants ───────────────────────────────────────────────────
router.get("/", async (req, res) => {
  try {
    const etudiants = await Etudiant.findAll({
      include: { model: Stage, as: "stages" },
    });
    res.json({ total: etudiants.length, etudiants });
  } catch (error) {
    res.status(500).json({ erreur: error.message });
  }
});

// ─── GET un étudiant par ID ───────────────────────────────────────────────────
router.get("/:id", async (req, res) => {
  try {
    const etudiant = await Etudiant.findByPk(req.params.id, {
      include: { model: Stage, as: "stages" },
    });
    if (!etudiant)
      return res
        .status(404)
        .json({ erreur: `Etudiant ${req.params.id} introuvable.` });

    res.json(etudiant);
  } catch (error) {
    res.status(500).json({ erreur: error.message });
  }
});

// ─── POST créer un étudiant ───────────────────────────────────────────────────
router.post("/", async (req, res) => {
  try {
    const { nom, email, telephone } = req.body;

    const existe = await Etudiant.findOne({ where: { email } });
    if (existe)
      return res
        .status(409)
        .json({ erreur: `L'email "${email}" est déjà utilisé.` });

    const nouvel = await Etudiant.create({ nom, email, telephone });
    res.status(201).json(nouvel);
  } catch (error) {
    res.status(500).json({ erreur: error.message });
  }
});

// ─── PUT modifier complètement un étudiant ────────────────────────────────────
router.put("/:id", async (req, res) => {
  try {
    const etudiant = await Etudiant.findByPk(req.params.id);
    if (!etudiant)
      return res
        .status(404)
        .json({ erreur: `Etudiant ${req.params.id} introuvable.` });

    const { nom, email, telephone } = req.body;

    const existe = await Etudiant.findOne({ where: { email } });
    if (existe && existe.id_etudiant !== etudiant.id_etudiant)
      return res
        .status(409)
        .json({ erreur: `L'email "${email}" est déjà utilisé.` });

    await etudiant.update({ nom, email, telephone });
    res.json(etudiant);
  } catch (error) {
    res.status(500).json({ erreur: error.message });
  }
});

// ─── PATCH modifier partiellement un étudiant ─────────────────────────────────
router.patch("/:id", async (req, res) => {
  try {
    const etudiant = await Etudiant.findByPk(req.params.id);
    if (!etudiant)
      return res
        .status(404)
        .json({ erreur: `Etudiant ${req.params.id} introuvable.` });

    if (req.body.email) {
      const existe = await Etudiant.findOne({
        where: { email: req.body.email },
      });
      if (existe && existe.id_etudiant !== etudiant.id_etudiant)
        return res
          .status(409)
          .json({ erreur: `L'email "${req.body.email}" est déjà utilisé.` });
    }

    await etudiant.update(req.body);
    res.json(etudiant);
  } catch (error) {
    res.status(500).json({ erreur: error.message });
  }
});

// ─── DELETE supprimer un étudiant ────────────────────────────────────────────
router.delete("/:id", async (req, res) => {
  try {
    const etudiant = await Etudiant.findByPk(req.params.id);
    if (!etudiant)
      return res
        .status(404)
        .json({ erreur: `Etudiant ${req.params.id} introuvable.` });

    await etudiant.destroy();
    res.json({
      message: `Etudiant "${etudiant.nom}" supprimé avec succès.`,
      etudiant,
    });
  } catch (error) {
    res.status(500).json({ erreur: error.message });
  }
});

export default router;
