/**
 * Helloworld
 * @param {string} name Le prénom
 */
function hello(name) {
  return `Hello ${name}!`;
}

const prenoms = ['Romain', 'Michel'];

for (let i = 0; i < prenoms.length; i++) {
  const prenom = prenoms[i];
  console.log(hello(prenom));
}
