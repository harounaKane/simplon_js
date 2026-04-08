import { DataTypes } from "sequelize";
import sequelize from "../db.js";

const Prof = sequelize.define(
  "Prof",
  {
    id_prof: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nom: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(50),
      unique: true,
    },
    spec: {
      type: DataTypes.STRING(30),
    },
  },
  {
    timestamps: true,
    createdAt: true,
    updatedAt: true,
  },
);

export default Prof;
