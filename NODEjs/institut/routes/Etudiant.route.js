import express from "express";
import Etudiant from "../models/Etudiant.js";
import Stage from "../models/Stage.js";
import {
  addEtudiant,
  deleteEtudiant,
  getEtudiant,
  getEudiants,
  updateEtudiant,
  updateEtudiantPartiel,
} from "../controllers/Etudiant.controller.js";

const router = express.Router();

// ─── GET tous les étudiants ───────────────────────────────────────────────────
router.get("/", getEudiants);

// ─── GET un étudiant par ID ───────────────────────────────────────────────────
router.get("/:id", getEtudiant);

// ─── POST créer un étudiant ───────────────────────────────────────────────────
router.post("/", addEtudiant);

// ─── PUT modifier complètement un étudiant ────────────────────────────────────
router.put("/:id", updateEtudiant);

// ─── PATCH modifier partiellement un étudiant ─────────────────────────────────
router.patch("/:id", updateEtudiantPartiel);

// ─── DELETE supprimer un étudiant ────────────────────────────────────────────
router.delete("/:etudiantId", deleteEtudiant);

export default router;
