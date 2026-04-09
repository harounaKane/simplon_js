import { DataTypes } from "sequelize";
import sequelize from "../db.js";
import Matiere from "./Matiere.js";

const Stage = sequelize.define(
  "Stage",
  {
    id_stage: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nom: {
      type: DataTypes.STRING(40),
      allowNull: false,
    },
    debut: {
      type: DataTypes.DATE,
    },
    fin: {
      type: DataTypes.DATE,
    },
    description: {
      type: DataTypes.TEXT,
    },
  },
  {
    timestamps: false,
  },
);

Stage.belongsToMany(Matiere, {
  through: "stage_matiere",
  as: "matieres",
  foreignKey: "stageId",
});

Matiere.belongsToMany(Stage, {
  through: "stage_matiere",
  as: "satges",
  foreignKey: "matiereId",
});

export default Stage;
