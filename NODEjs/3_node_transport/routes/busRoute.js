import express from "express";
import { db } from "../db.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM bus");

    res.status(200).json(rows);
  } catch (error) {
    res.status(404).json({ erreur: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const [rows] = await db.query("SELECT * FROM bus WHERE id = ?", [id]);

    if (rows.length === 0)
      return res.status(404).json({ erreur: "Pas de bus avec cet ID" });

    res.status(200).json(rows[0]);
  } catch (error) {
    res.status(500).json({ erreur: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const { capacite, modele, marque } = req.body;

    await db.query(
      "INSERT INTO bus (capacite, modele, marque) VALUES(?, ?, ?)",
      [capacite, modele, marque],
    );

    res.status(200).json({ message: "Bus ajouté !" });
  } catch (error) {
    res.status(500).json({ erreur: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { capacite, modele, marque } = req.body;

    const [result] = await db.query(
      "UPDATE bus SET capacite = ?, modele = ?, marque = ? WHERE id = ?",
      [capacite, modele, marque, id],
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Pas de BUS avec cet ID" });

    res.status(200).json({ message: "Bus modifié !" });
  } catch (error) {
    res.status(500).json({ erreur: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const [result] = await db.query("DELETE FROM bus WHERE id = ?", [id]);

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Pas de BUS avec cet ID" });

    res.status(200).json({ message: "Bus suprimé !" });
  } catch (error) {
    res.status(500).json({ erreur: error.message });
  }
});

export default router;
