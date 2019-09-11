/** @type {HTMLFormElement} */
const todoFormElt = document.querySelector('.todo-form');

todoFormElt.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('submit');
});
