"use strict";
// Mode strict : signale les variables non déclarées ( le slide 52)

const nom = "John";    // String (slide 38)
const prenom = "Doe";  // String (slide 38)
const age = 30;        // number : entier (slide 38)
const note = 15;       // number (slide 38)
 const pi = 3.14;     // Constante de type number : réel (slides 38 )

// Fonction sans paramètre, appelée au clic du bouton avec onclick (slides 16, 18 et 46)
function f1() {
    // Affichage dans la console avec console.log (slide 34)
    console.log(nom);
}

// Fonction appelée au clic sur le bouton Prénom (slides 16 et 46)
function f2() {
    console.log(prenom); // Affichage avec console.log (slide 34)
}

// Fonction appelée au clic sur le bouton Nom & Prénom (slides 16 et 46)
function f3() {
    // Affichage élaboré : concaténation avec l'opérateur + (slide 38)
    console.log(nom + "-" + prenom);
}

// Fonction appelée au clic sur le bouton Age (slides 16 et 46)
function f4() {
    console.log(age); // Affichage avec console.log (slide 34)
}

// Fonction appelée au clic sur le bouton Note (slides 16 et 46)
function f5() {
    console.log(note); // Affichage avec console.log (slide 34)
}

// Fonction appelée au clic sur le bouton Pi (slides 16 et 46)
function f6() {
    console.log(pi); // Affichage avec console.log (slide 34)
}
