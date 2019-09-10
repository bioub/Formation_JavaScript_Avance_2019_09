// REST Params (conversion d'une liste de valeurs -> tableau)
function sum1(a, b, ...nbs) { // ...nbs = 4, 5
  let result = a + b;
  nbs.forEach(nb => result += Number(nb));
  return result;
}

console.log(sum1(2, 3, 4, 5));

function sum2(a, b, c, d) {
  return a + b + c + d;
}

const nbs = [2, 3, 4, 5];

// SPREAD operator (conversion d'un tableau -> une liste de valeurs)
console.log(sum2(...nbs)); // a, b, c, d = ...nbs

const newNbs = [1, ...nbs, 6, 7];
const clone = [...nbs];

// Destructurer Array
//    [2   , 3    , 4     , 5]
const [deux, trois, quatre] = nbs;
const [prenom, nom] = 'Romain Bohdanowicz'.split(' ');

//    [2   , 3    , 4     , 5]
const [two,      , four, five, six = 6] = nbs;
const [dos, ...numbres] = nbs;
console.log(numbres.join(' - ')); // 3 - 4 - 5

// Destructurer Object
const coords = {x: 1, y: 2};
//    {x: 1, y: 2}
const {x: a, y: b} = coords;
console.log(a); // 1

//    {x: 1, y: 2}
const {x, y, z = 10} = coords;
console.log(x); // 1
console.log(z); // 10



// function Coords(x, y) {
//   this.x = x;
//   this.y = y;
// }

// Coords.prototype.getType = function() {
//   return 'coords, y : ' + this.y;
// };


class Coords {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
  getY() {
    return this.y;
  }
  static getClass() {
    return 'Coords';
  }
}

console.log(typeof Coords); // function
console.log(typeof Coords.prototype.getY); // function

const coords2 = new Coords();
console.log(coords2.getY()); // 0
console.log(Coords.getClass()); // Coords
