function externe(msg) {
  function interne() {
    console.log(msg);
  }
  return interne;
}

for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 100);
}

// Dans 100ms :
// ..100ms.. 3 3 3

for (var i = 0; i < 3; i++) {
  setTimeout(externe(i), 200);
}

// Dans 100ms :
// ..100ms.. 0 1 2

