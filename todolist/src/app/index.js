import { prepend } from "./dom";

/** @type {HTMLFormElement} */
const todoFormElt = document.querySelector('.todo-form');
/** @type {HTMLInputElement} */
const todoInputElt = document.querySelector('.todo-input');
/** @type {HTMLDivElement} */
const todoListElt = document.querySelector('.todo-list');
/** @type {HTMLInputElement} */
const todoToggleElt = document.querySelector('.todo-toggle');
/** @type {HTMLDivElement} */
const todoErrorsElt = document.querySelector('.todo-errors');

todoFormElt.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!todoInputElt.value.match(/^[\p{Alphabetic}0-9\s]{5,}$/iu)) {
    todoErrorsElt.innerText = 'Il faut saisir des lettres, des espaces ou des chiffres uniquement (au moins 5)'
    return;
  }

  todoErrorsElt.innerText = '';
  const todoRowElt = document.createElement('div');

  // todoRowElt.innerHTML = `<input type="checkbox">
  // <span>${todoInputElt.value}</span>
  // <button class="todo-remove">-</button>`;

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'todo-complete';
  todoRowElt.appendChild(checkbox);

  const span = document.createElement('span');
  span.innerText = todoInputElt.value;
  todoRowElt.appendChild(span);

  const buttonMoins = document.createElement('button');
  buttonMoins.className = 'todo-remove';
  buttonMoins.innerText = '-';
  todoRowElt.appendChild(buttonMoins);

  // buttonMoins.addEventListener('click', (event) => {
  //   // event.target.parentNode.parentNode.removeChild(event.target.parentNode);
  //   // todoListElt.removeChild(todoRowElt);
  // });

  prepend(todoListElt, todoRowElt);
});


todoListElt.addEventListener('click', (event) => {
  /** @type {HTMLElement} */
  const clickedElt = event.target;

  if (clickedElt.classList.contains('todo-remove')) {
    clickedElt.parentNode.parentNode.removeChild(clickedElt.parentNode);
  }
});

todoToggleElt.addEventListener('click', () => {
  /** @type {NodeListOf<HTMLInputElement>} */
  const checkboxes = todoListElt.querySelectorAll('.todo-complete');

  for (const checkbox of checkboxes) {
    checkbox.checked = todoToggleElt.checked;
  }
});

/*
Exercice 1 : Ajouter un bouton de suppression
- Ajouter un bouton moins avec document.createElement sur la ligne
- Au clic de ce bouton supprimer la ligne
(pour récupérer la ligne, soit utiliser la variable dans la portée closure,
event.target (dans le callback du click): le bouton sur lequel on a cliqué
)
- Utiliser removeChild https://developer.mozilla.org/fr/docs/Web/API/Node/removeChild

Exercice 2 : Ajouter une checkbox toggle all
- Ajouter une checkbox sur chaque ligne
- Au clic de la checkbox .todo-toggle
Cocher ou décocher toutes les checkbox
todoCheckElt.checked = true (pour cocher), false (pour décocher)
- Utiliser querySelectorAll pour sélectionner les checkboxes au clic

Exercice 3 : Au submit du formulaire
Vérifier avec une regex que le champs contienne au moins 5 charactères parmi lettre, chiffre, espace
En cas d'erreur utiliser alert('Erreur') ou écrire dans une balise div l'erreur
*/
