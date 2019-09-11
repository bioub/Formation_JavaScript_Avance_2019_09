/** @type {HTMLFormElement} */
const todoFormElt = document.querySelector('.todo-form');
/** @type {HTMLInputElement} */
const todoInputElt = document.querySelector('.todo-input');
/** @type {HTMLDivElement} */
const todoListElt = document.querySelector('.todo-list');

todoFormElt.addEventListener('submit', (event) => {
  event.preventDefault();
  const todoRowElt = document.createElement('div');
  todoRowElt.innerText = todoInputElt.value;

  if (todoListElt.childElementCount) {
    todoListElt.insertBefore(todoRowElt, todoListElt.firstElementChild);
  } else {
    todoListElt.appendChild(todoRowElt);
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
*/
