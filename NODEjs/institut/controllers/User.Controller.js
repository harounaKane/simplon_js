import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const inscription = async (req, res) => {
  try {
    const { prenom, login, mdp, role } = req.body;

    const exist = await User.findOne({ where: { login } });

    if (exist)
      return res
        .status(409)
        .json({ message: `Ce login ${login} est déjà utilisé !` });

    // hashé le mot de passe
    const hash = await bcrypt.hash(mdp, 10);
    const user = await User.create({ prenom, login, mdp: hash, role });

    // const userObj = user.toJSON();
    // delete userObj.mdp;

    // renvoie le USER sans le mot de passe au front
    const { mdp: _, ...userSansMdp } = user.toJSON();

    res.status(200).json(userSansMdp);
  } catch (err) {
    return res.status(500).json({ erreur: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { login, mdp } = req.body;

    const user = await User.findOne({ where: { login } });

    // test si login pas correct
    if (!user)
      return res
        .status(401)
        .json({ message: "Login ou mot de passe incorrect !" });

    // si user, test si mdp saisi == mdp BD
    const mdpValide = await bcrypt.compare(mdp, user.mdp);

    // test si login correct
    if (!mdpValide)
      return res
        .status(401)
        .json({ message: "Login ou mot de passe incorrect !" });

    // générer un token
    const token = jwt.sign(
      { id: user.id, login: user.login, role: user.role },
      process.env.TOKEN,
      { expiresIn: "1h" },
    );

    const { mdp: _, ...userSansMdp } = user.toJSON();

    res
      .status(200)
      .json({ message: "Connexion réussie", token, user: userSansMdp });
  } catch (err) {
    return res.status(500).json({ erreur: err.message });
  }
};
