function hello(name) {
  return 'Hello ' + name + '!';
}

const prenoms = ['Romain', 'Michel', 'Jean'];

// Programmation impérative
for (let i = 0; i < prenoms.length; i++) {
  const prenom = prenoms[i];
  if (prenom.length === 6) {
    const prenomMaj = prenom.toUpperCase();
    console.log(prenomMaj);
  }
}

// ES5 programmation fonctionnelle
prenoms
  .filter((prenom) => prenom.length === 6)
  .map((prenom) => prenom.toUpperCase())
  .forEach((prenomMaj) => console.log(prenomMaj));

console.log('Fin');


// pile d'appels
// ^
// |
// |               up   up   lg   lg
// |=> - => - =>   => - =>   => - =>
// |filter       - map     - forEach - lg
// +--------------------------------------> temps
//                           ROM  MIC  Fin
