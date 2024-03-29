const random = {
  get() {
    return Math.random()
  },
  getArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  },
  getInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  },
  getIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
  },
};

const readline = require('readline');

class Jeu {
  constructor(options = {}) {
    const { min = 0, max = 100 } = options;

    this._rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    this.entierAlea = random.getIntInclusive(min, max);
    this.essais = [];
  }

  jouer() {
    if (this.essais.length) {
      console.log(`Vous avez déjà joué : ${this.essais.join(' - ')}...`);
    }

    this._rl.question('Quel est le nombre ? ', (answer) => {
      console.log('Vous avez saisi : ' + answer);

      const entierSaisi = Number.parseInt(answer);

      if (Number.isNaN(entierSaisi)) {
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
  }
}




const game = new Jeu();
game.jouer();
