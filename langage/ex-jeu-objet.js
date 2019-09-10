const random = {
  get: () => Math.random(),
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

function Jeu() {
  this.rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  this.entierAlea = random.getIntInclusive(0, 100);
  this.essais = [];
}

Jeu.prototype.jouer = function jouer() {
  if (this.essais.length) {
    console.log('Vous avez déjà joué : ' + essais.join(' - '));
  }

  rl.question('Quel est le nombre ? ', (answer) => {
    console.log('Vous avez saisi : ' + answer);

    const entierSaisi = parseInt(answer);

    if (isNaN(entierSaisi)) {
      console.log('Erreur : il faut saisir un nombre');
      return jouer();
    }

    essais.push(entierSaisi);

    if (entierSaisi < entierAlea) {
      console.log('Trop petit');
      return jouer();
    }

    if (entierSaisi > entierAlea) {
      console.log('Trop grand');
      return jouer();
    }

    console.log('Trouvé');
    rl.close();
  });
};

const game = new Jeu();
game.jouer();
