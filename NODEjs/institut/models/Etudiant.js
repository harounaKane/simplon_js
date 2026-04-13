import { DataTypes } from "sequelize";
import sequelize from "../db.js";

const Etudiant = sequelize.define(
  "Etudiant",
  {
    id_etudiant: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nom: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        notEmpty: { msg: "Le nom est obligatoire." },
      },
    },
    email: {
      type: DataTypes.STRING(150),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: { msg: "Email invalide." },
      },
    },
    telephone: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
  },
  {
    tableName: "etudiants",
    timestamps: false,
  },
);

export default Etudiant;
