import { DataTypes } from "sequelize";
import sequelize from "../db.js";

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
      allowNull: false,
    },
    fin: {
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
