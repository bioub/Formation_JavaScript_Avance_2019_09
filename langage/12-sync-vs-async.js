const fs = require('fs');

// Synchrone
try {
  const content = fs.readFileSync('.editorconfig', {encoding: 'UTF-8'});
  fs.writeFileSync('.editorconfig.copy', content);
  console.log('Copy Done');
} catch (err) {
  console.log('Erreur : ' + err.message);
}

// Asynchrone (Callback Hell / Pyramid of Doom)
fs.readFile('.editorconfig', {encoding: 'UTF-8'}, (err, content) => {
  if (err) {
    return console.log('Erreur : ' + err.message);
  }
  fs.writeFile('.editorconfig.copy', content, (err) => {
    if (err) {
      return console.log('Erreur : ' + err.message);
    }
    console.log('Copy Done');
  });
});

// Asynchrone (Promise)
fs.promises.readFile('.editorconfig', {encoding: 'UTF-8'})
  .then((content) => fs.promises.writeFile('.editorconfig.copy', content))
  .then(() => console.log('Copy Done'))
  .catch((err) => console.log('Erreur : ' + err.message));

// Asynchrone (async/async ES2017)
(async function () {
  try {
    const content = await fs.promises.readFile('.editorconfig', {encoding: 'UTF-8'})
    await fs.promises.writeFile('.editorconfig.copy', content)
    console.log('Copy Done');
  } catch (err) {
    console.log('Erreur : ' + err.message)
  }
})();

// Exercice sur les promesses
// https://github.com/bioub/Exercice-Build

async function build() {
  await copy();

}
