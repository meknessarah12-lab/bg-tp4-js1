
const produit = {
  nom: " bureau ",
  prix: 25000,
  quantite: 10,
};

const valeurStock = produit.prix * produit.quantite;

console.log(`Valeur totale du stock de ${produit.nom} : ${valeurStock} DA`);


const catalogue = [
  { nom: "bureau", prix: 25000, quantite: 10 },
  { nom: "armoire", prix: 280000, quantite: 8 },
  { nom: "table", prix: 15000, quantite: 5 },
  { nom: "Cadre", prix: 6000, quantite: 15 },
  { nom: "chaise", prix: 4000, quantite: 10 },
];

const prixMoyen =
  catalogue.reduce((somme, p) => somme + p.prix, 0) / catalogue.length;


console.log("Prix moyen du catalogue :", prixMoyen);
console.log("Produits dont le prix dépasse le prix moyen :");
catalogue
  .filter((p) => p.prix > prixMoyen)
  .forEach((p) => console.log(`- ${p.nom} : ${p.prix}`));

const totalArticles = catalogue.reduce((total, p) => total + p.quantite, 0);
const valeurGlobale = catalogue.reduce(
  (total, p) => total + p.prix * p.quantite,
  0
);


console.log("Nombre total d'articles :", totalArticles);
console.log("Valeur globale du stock :", valeurGlobale);


function valeurStockProduit(p) {
  return p.prix * p.quantite;
}


console.log("Test sur plusieurs produits :");
console.log(`${catalogue[0].nom} :`, valeurStockProduit(catalogue[0]));
console.log(`${catalogue[2].nom} :`, valeurStockProduit(catalogue[2]));
console.log(`${catalogue[4].nom} :`, valeurStockProduit(catalogue[4]));


catalogue.forEach((p) =>
  console.log(`Stock de ${p.nom} : ${valeurStockProduit(p)}`)
);


function traiterCatalogue(liste, callback) {
  for (const p of liste) {
    callback(p);
  }
}


console.log("Noms des produits :");
traiterCatalogue(catalogue, (p) => console.log(p.nom));

console.log("Prix des produits :");
traiterCatalogue(catalogue, (p) => console.log(p.prix));