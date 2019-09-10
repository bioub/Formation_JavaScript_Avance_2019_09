const prenoms = ['Romain', 'Michel', (a, b) => a + b];
console.log(prenoms[0]);
console.log(prenoms[2](1, 2)); // 3

const contact = {
  prenom: 'Romain',
  nom: 'Bohdanowicz',
  hello: () => 'Bonjour'
};
console.log(contact.prenom); // Romain
console.log(contact['prenom']); // Romain

// les crochets sont plus dynamiques
// on peut retrouver la valeur d'une clé dont le nom
// est dans une expression (variable...)
const key = 'prenom';
console.log(contact.key); // undefined
console.log(contact[key]); // Romain

console.log(contact.hello());

// En JS, on va manipuler des objets existant

// défini dans la norme ECMAScript
console.log(Math.PI); // propriété PI
console.log(Math.random()); // méthode random

// défini dans Node.js
console.log(process.stdin);

// défini par le navigateur
// document.body

// défini dans Node.js et le navigateur
console.log(console.log);

// En JS le modèle objet est dynamique quand en Java il est statique
// statique -> basé sur des classes
// dynamiques -> basé sur des prototypes

console.log(Math.sum);

// Extension d'objet
Math.sum = (a, b) => a + b;
console.log(Math.sum('1', 2)); // 12

// Modification
Math.sum = (a, b) => Number(a) + Number(b);
console.log(Math.sum('1', 2)); // 3

// Supprimer
delete Math.sum;
console.log(Math.sum);

// Pour créer un objet on peut utiliser la syntaxe
// Object literal

const myMath = {
  sum: (a, b) => a + b,
};

const coords = {
  x: 1,
  y: 2,
  getType: function() {
    return 'coords' + this.y;
  }
};

console.log(coords.x); // 1
console.log(coords.y); // 2
console.log(coords.z); // undefined

coords.z = 3;
console.log(coords.z); // 3

// Pour un besoin plus régulier d'objet avec une forme bien définie
// on peut utiliser une fonction qui retourne un objet
// factory function / fabrique

function coordsFactory(x = 0, y = 0) {
  return {
    x: x,
    y: y,
    getType: function() {
      return 'coords';
    }
  }
}

const coords2 = coordsFactory();
const coords3 = coordsFactory(1, 2);
console.log(coords2.getType === coords3.getType); // false

// Pour éviter que des méthodes (fonction de l'objet) soit dupliquées
// on peut utiliser une fonction constructeur / constructor

function Coords(x, y) {
  this.x = x;
  this.y = y;
}

Coords.prototype.getType = function() {
  return 'coords, y : ' + this.y;
};

const coords4 = new Coords(1, 2);
console.log(typeof coords4); // object
console.log(coords4.x); // 1
console.log(coords4.y); // 2
console.log(coords4.getType()); // 'coords'
console.log(coords4.hasOwnProperty('x')); // true
console.log(coords4.hasOwnProperty('getType')); // false

const coords5 = new Coords();
console.log(coords4.getType === coords5.getType); // true
