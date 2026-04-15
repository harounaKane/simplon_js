import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  try {
    // Bearer yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVC......
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer "))
      return res.status(401).json({ erreur: "Token manquant" });

    // extraire le token(sans le mot Bearer)
    const token = authHeader.split(" ")[1];

    const decode = jwt.verify(token, process.env.TOKEN);

    req.user = decode;

    next();
  } catch (err) {
    res.status(500).json({ erreur: err.message });
  }
};

export default verifyToken;
