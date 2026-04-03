// Import du framework Express
import express from "express";

// Création de l'application Express
const app = express();

// Middleware pour parser le body des requêtes en JSON (rend req.body accessible)
app.use(express.json());

// Import du tableau de produits depuis un fichier externe
import { produits } from "./produits.js";

// Compteur d'ID
let nextId = produits.length + 1;

// GET tous les produits
app.get("/", (req, res) => {
  // Retourne tous les produits en JSON
  res.json(produits);
});

// GET un produit par ID
app.get("/produit/:id", (req, res) => {
  // Convertit l'id reçu (string) en nombre entier
  const id = parseInt(req.params.id);

  // Cherche le produit dans le tableau
  const produit = produits.find((p) => p.id === id);

  // Si aucun produit trouvé, on retourne une erreur
  if (!produit) return res.json({ error: `Pas de produit trouvé !` });

  // Sinon on retourne le produit
  res.send(produit);
});

// DELETE supprimer un produit par ID
app.delete("/produit/:id", (req, res) => {
  // Convertit l'id reçu en nombre entier
  const id = parseInt(req.params.id);

  // Cherche la position du produit dans le tableau
  const index = produits.findIndex((p) => p.id == id);

  // Si le produit n'existe pas, retourne une erreur 404
  if (index === -1)
    return res.status(404).json({ erreur: "Pas de produit avec cet id" });

  // Supprime le produit du tableau et récupère l'élément supprimé
  const produitDelet = produits.splice(index, 1)[0];

  // Confirme la suppression avec le nom du produit supprimé
  res.status(200).json({ message: `produit ${produitDelet.libelle} suprimé` });
});

// POST créer un nouveau produit
app.post("/produit", (req, res) => {
  // Extrait les champs du body de la requête
  const { libelle, prix, stock, categorie } = req.body;

  // Crée le nouveau produit avec un id auto-incrémenté
  const newProd = { id: nextId++, libelle, prix, stock, categorie };

  // Ajoute le produit au tableau
  produits.push(newProd);

  // Confirme la création
  res.json({ message: "post" });
});

// PUT modifier complètement un produit
app.put("/produit/:id", (req, res) => {
  // Convertit l'id reçu en nombre entier
  const id = parseInt(req.params.id);

  // Cherche la position du produit dans le tableau
  const index = produits.findIndex((p) => p.id === id);

  // Si le produit n'existe pas, retourne une erreur 404
  if (index === -1)
    return res.status(404).json({ erreur: "pas de produit ..." });

  // Extrait les nouveaux champs depuis le body
  const { libelle, prix, stock, categorie } = req.body;

  // Construit le produit mis à jour (on conserve le même id)
  const upProd = { id, libelle, prix, stock, categorie };

  // Remplace l'ancien produit par le nouveau dans le tableau
  produits[index] = upProd;

  // Confirme la modification
  res.json({ message: "post" });
});

// Route qui retourne les produits filtrés par une catégorie donnée
app.get("/produit/categorie/:categorie", (req, res) => {
  // la catégorie reçue en paramètre
  const { categorie } = req.params;

  // Récupère tous les produits de même catégorie passée en paramètre
  const result = produits.filter(
    (p) => p.categorie.toLowerCase() === categorie.toLowerCase(),
  );

  // Si catégorie en paramètre n'existe pas, on retourne srreur 404
  if (!result.length)
    return res
      .status(404)
      .json({ erreur: "pas de prod dans la catégorie " + categorie });

  // somme des produits
  const total = result.reduce((sum, produit) => sum + produit.prix, 0);

  // Confirmation
  res
    .status(200)
    .json({ total, nbreProd: result.length, ProdByCategory: result });
});

// Route pour les produits dont le prix est inférieur à la moyenne
app.get("/produit/filtre/moins-cher", (req, res) => {
  // calcule de la moyenne
  const moyenne =
    produits.reduce((sum, produit) => sum + produit.prix, 0) / produits.length;

  // produits dont prix inférieur à la moyenne
  const result = produits.filter((p) => p.prix < moyenne);

  // Confirmation
  res.status(200).json({ moyenne, result });
});

// suppression des produit prix [100, 500];
app.delete("/produit/delete/intervalle100_500", (req, res) => {
  // Récuperer les produits supprimés
  const supprimes = produits.filter(
    (produit) => produit.prix >= 50 && produit.prix <= 500,
  );

  // Récuperer les produits restants
  const restants = produits.filter(
    (produit) => produit.prix < 50 || produit.prix > 500,
  );

  // On vide le tableau d'origine pour garder son adresse de ref
  produits.length = 0;

  // Copie des produits restants dans le tableau de produit d'origine
  restants.map((p) => produits.push(p));

  // confirmation réponse !
  res.status(200).json({
    total: produits.length,
    supprimes: supprimes.length,
    restants: restants.length,
  });
});

// Démarrage du serveur sur le port 4000
app.listen(4000, () => {});
