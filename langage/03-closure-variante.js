function externe(msg) {
  function interne() {
    console.log(msg);
  }
  return interne;
}

const hello = externe('Hello');
hello(); // Hello

const bonjour = externe('Bonjour');
bonjour(); // Bonjour

// pile d'appels
// ^
// |
// |
// |
// |externe - interne
// +----------------------------------> temps
