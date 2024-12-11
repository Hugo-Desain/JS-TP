const panier = [
  { nom: "Pain", quantite: 4, prixUnite: 2 },
  { nom: "Lait", quantite: 2, prixUnite: 1.3 },
  { nom: "Pates", quantite: 3, prixUnite: 1.2 },
  { nom: "Oeufs", quantite: 6, prixUnite: 0.5 },
  { nom: "Sucre", quantite: 1, prixUnite: 1.5 },
  { nom: "Huile", quantite: 1, prixUnite: 3 },
];

const ajouterProduitPanier = (produit) => {
  const produitExistant = panier.find((item) => item.nom === produit.nom);

  if (produitExistant) {
    produitExistant.quantite += produit.quantite;
  } else {
    panier.push(produit);
  }

  const prixTotal = panier.reduce(
    (total, item) => total + item.quantite * item.prixUnite,
    0
  );

  return prixTotal;
};
