import { prepend } from "./dom";
import axios from 'axios';

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

  if (!todoInputElt.value.match(/^[\p{Alphabetic}\s]{5,}$/iu)) {
    todoErrorsElt.innerText = 'Il faut saisir des lettres, des espaces ou des chiffres uniquement (au moins 5)'
    return;
  }

  todoErrorsElt.innerText = '';
  // Exercice
  // Coté client : créer avec axios la requete pour insérer la todo
  // axios.post(url, todo)
  // et récupérer la réponse pour l'ajouter au DOM (avec l'id)
  // Vous pourriez créer un attribut data-id au niveau du bouton moins ou
  // de la ligne pour la suppression

  addTodo({
    text: todoInputElt.value,
    completed: false,
  })

});


todoListElt.addEventListener('click', (event) => {
  /** @type {HTMLElement} */
  const clickedElt = event.target;

  if (clickedElt.classList.contains('todo-remove')) {
    clickedElt.parentNode.parentNode.removeChild(clickedElt.parentNode);
  }

  // Exercice
  // Coté client : créer avec axios la requete pour supprimer la todo
  // axios.delete('http://localhost:3000/api/todos/123')

});

todoToggleElt.addEventListener('click', () => {
  /** @type {NodeListOf<HTMLInputElement>} */
  const checkboxes = todoListElt.querySelectorAll('.todo-complete');

  for (const checkbox of checkboxes) {
    checkbox.checked = todoToggleElt.checked;
  }
});

function addTodo(todo) {
  const todoRowElt = document.createElement('div');

  // todoRowElt.innerHTML = `<input type="checkbox">
  // <span>${todoInputElt.value}</span>
  // <button class="todo-remove">-</button>`;

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = todo.completed;
  checkbox.className = 'todo-complete';
  todoRowElt.appendChild(checkbox);

  const span = document.createElement('span');
  span.innerText = todo.text;
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
}


async function fetchTodos() {
  const res = await axios.get('http://localhost:3000/api/todos');

  for (const todo of res.data) {
    addTodo(todo);
  }
}

fetchTodos();
