import Stage from "./Stage.js";
import Matiere from "./Matiere.js";
import Etudiant from "./Etudiant.js";
import Prof from "./Prof.js";

// ─── Prof → Matiere (1 à N) ───────────────────────────────────────────────
Prof.hasMany(Matiere, { foreignKey: "idProf", as: "matieres" });
Matiere.belongsTo(Prof, { foreignKey: "idProf", as: "prof" });

// ─── Stage ↔ Matiere (N à N) ──────────────────────────────────────────────
Stage.belongsToMany(Matiere, {
  through: { model: "stage_matiere", timestamps: false },
  as: "matieres",
  foreignKey: "stageId",
  otherKey: "matiereId",
});
Matiere.belongsToMany(Stage, {
  through: { model: "stage_matiere", timestamps: false },
  as: "stages",
  foreignKey: "matiereId",
  otherKey: "stageId",
});

// ─── Stage ↔ Etudiant (N à N) ─────────────────────────────────────────────
Stage.belongsToMany(Etudiant, {
  through: { model: "stage_etudiant", timestamps: false },
  as: "etudiants",
  foreignKey: "stageId",
  otherKey: "etudiantId",
});
Etudiant.belongsToMany(Stage, {
  through: { model: "stage_etudiant", timestamps: false },
  as: "stages",
  foreignKey: "etudiantId",
  otherKey: "stageId",
});

export { Stage, Matiere, Etudiant, Prof };
