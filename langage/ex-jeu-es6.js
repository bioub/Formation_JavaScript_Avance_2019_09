const random = {
  // 1 - Method Properties
  get: function () {
    return Math.random()
  },
  getArbitrary: function (min, max) {
    return Math.random() * (max - min) + min;
  },
  getInt: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  },
  getIntInclusive: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
  },
}

const readline = require('readline');

// 2 - Class
function Jeu(options /* 3 - Default */) {
  options = options || {};

  // 4 - Destructuring Object / Shortand property / Default value
  const min = options.min || 0;
  const max = options.max !== undefined ? options.max : 100;

  this._rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  this.entierAlea = random.getIntInclusive(min, max);
  this.essais = [];
}

Jeu.prototype.jouer = function jouer() {
  if (this.essais.length) {
    // 5 - Template literal
    console.log('Vous avez déjà joué : ' + this.essais.join(' - ') + '...');
  }

  this._rl.question('Quel est le nombre ? ', (answer) => {
    console.log('Vous avez saisi : ' + answer);

    // 6 - parseInt -> Number.parseInt
    const entierSaisi = parseInt(answer);

    // 6 - isNaN -> Number.isNaN
    if (isNaN(entierSaisi)) {
      console.log('Erreur : il faut saisir un nombre');
      return this.jouer();
    }

    this.essais.push(entierSaisi);

    if (entierSaisi < this.entierAlea) {
      console.log('Trop petit');
      return this.jouer();
    }

    if (entierSaisi > this.entierAlea) {
      console.log('Trop grand');
      return this.jouer();
    }

    console.log('Trouvé');
    this._rl.close();
  });
};

const game = new Jeu();
game.jouer();
