const readline = require('readline');

const rl = readline.createInterface(process.stdin, process.stdout);

function jouer() {
  rl.question('Quel est le nombre ? ', (answer) => {
    console.log('Vous avez saisi : ' + answer);
    // rl.close(); // à appeler 1 fois au moment de quitter
    jouer();
  });
}

jouer();

// pile d'appels
// ^
// |
// |               question       question
// |question       jouer          jouer
// |jouer    ..... =>       ..... =>
// +-----------------------------> temps
//
