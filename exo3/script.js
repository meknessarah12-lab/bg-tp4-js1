"use strict";
// Mode strict (slide 52)

// Fonction A : appelée au clic avec onclick (slides 16 et 46), elle appelle la fonction B
function A() {
    // Données Students avec const (slide 38) : tableau de tableaux [id, nom, prénom, note, coef] (slide 39)
    const Students = [
        [1000, "JOHN", "DOE", 14, 5],
        [2000, "BOB", "CARLTON", 7, 1],
        [3000, "RAYANE", "SMITH", 13, 3]
    ];

    // Boucle for pour parcourir les étudiants (slide 45)
    for (let i = 0; i < Students.length; i++) {
        // Accès aux éléments d'un tableau par indice (slide 39)
        const id = Students[i][0];
        const note = Students[i][3];

        // Appel de la fonction B et récupération de son retour (slide 46)
        // Notation ternaire (slide 43)
        const decision = B(note) ? "ADMIS" : "AJOURNÉ";

        // Affichage un par un avec console.log (slide 34)
        // Concaténation avec l'opérateur + (slide 38)
        console.log(id + ": " + decision);
    }
}

// Fonction B : un seul paramètre (float), retourne un booléen (slide 46)
function B(note) {
    // Opérateur relationnel >= (slide 42) : retourne true ou false (slide 38)
    return note >= 10;
}