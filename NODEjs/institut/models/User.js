import { DataTypes } from "sequelize";
import sequelize from "../db.js";

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    prenom: {
      type: DataTypes.STRING(40),
      allowNull: false,
    },
    login: {
      type: DataTypes.STRING(8),
      allowNull: false,
      unique: true,
    },
    mdp: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM("ADMIN", "USER"),
      defaultValue: "USER",
    },
  },
  {
    timestamps: false,
    tableName: "users",
  },
);

export default User;
