import { DataTypes } from "sequelize";
import sequelize from "../db.js";
import Prof from "./Prof.js";

const Matiere = sequelize.define("Matiere", {
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
  },
  duree: {
    type: DataTypes.INTEGER,
    defaultValue: 4,
  },
  idProf: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "profs",
      key: "id_prof",
    },
  },
});

// Relation: un Matière appartient à un Prof
Matiere.belongsTo(Prof, { foreignKey: "idProf", as: "prof" });
Prof.hasMany(Matiere, { foreignKey: "idProf", as: "matieres" });

export default Matiere;
