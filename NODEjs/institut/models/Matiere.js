import { DataTypes } from "sequelize";
import sequelize from "../db.js";

const Matiere = sequelize.define(
  "Matiere",
  {
    id_matiere: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nom: {
      type: DataTypes.STRING(40),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    duree: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    idProf: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    tableName: "matieres",
    timestamps: true,
  },
);

export default Matiere;
