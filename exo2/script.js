"use strict";
// Mode strict (slide 52)

// f1 : appelée au clic avec onclick (slides 16 et 46)
function f1() {
    // Tableau de chaînes de caractères avec const (slides 38 et 39)
    const etudiants = ["Etudiant1", "Etudiant2", "Etudiant3"];

    // Boucle for pour parcourir le tableau (slide 45)
    for (let i = 0; i < etudiants.length; i++) {
        // Accès à un élément du tableau par son indice (slide 39)
        console.log(etudiants[i]); // Affichage avec console.log (slide 34)
    }
}

// f2 : appelée au clic avec onclick (slides 16 et 46)
function f2() {
    // Objet avec les propriétés nom, prenom, age (slide 40)
    const etudiant = {
        nom: "John",    // Type String (slide 38)
        prenom: "DOE",  // Type String (slide 38)
        age: 30         // Type number (slide 38)
    };
    console.log(etudiant); // Affichage de l'objet (slides 34 et 40)
}

// f3 : appelée au clic avec onclick (slides 16 et 46)
function f3() {
    // Tableau d'objets (slide 41)
    const etudiants = [
        { nom: "nom1", prenom: "prenom1", age: 21 },
        { nom: "nom2", prenom: "prenom2", age: 22 },
        { nom: "nom3", prenom: "prenom3", age: 23 }
    ];

    // Boucle for pour parcourir le tableau d'objets (slide 45)
    for (let i = 0; i < etudiants.length; i++) {
        // Accès aux propriétés avec ".non d'attribut" (slides 40 et 41)
        // Concaténation avec l'opérateur + (slide 38)
        console.log(etudiants[i].nom + "-" + etudiants[i].prenom + "-" + etudiants[i].age);
    }
}