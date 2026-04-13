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
      // ← "debut" et non "dateDebut"
      type: DataTypes.DATE,
      allowNull: false,
    },
    fin: {
      // ← "fin" et non "dateFin"
      type: DataTypes.DATE,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    tableName: "stages",
    timestamps: false,
  },
);

export default Stage;
