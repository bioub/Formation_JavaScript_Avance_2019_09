const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

const todos = [{
  text: 'Acheter du pain',
  completed: false,
  id: 1,
}, {
  text: 'Introduction à nodemon',
  completed: true,
  id: 2,
}];

// GET http://localhost:3000/api/todos
app.get('/api/todos', (req, res) => {
  res.json(todos);
});

// POST http://localhost:3000/api/todos
app.post('/api/todos', express.json(), (req, res) => {
  // {text: 'ABC', completed: false}
  const todo = req.body;
  // Exercice
  // Coté serveur : générer un id (Math.random, soit le dernier id + 1)
  // l'ajouter à l'objet (étendre l'objet)
  // le stocker dans le tableau todos
  // et répondre en JSON l'objet modifié (avec son id)
});

// DELETE http://localhost:3000/api/todos/1
// DELETE http://localhost:3000/api/todos/2
app.delete('/api/todos/:id', (req, res) => {
  // type string
  const id = req.params.id;

  // Exercice
  // coté serveur : supprimer du tableau
  // la todo correspondant à cet id (
  // - Array.prototype.find
  // - Array.prototype.findIndex
  // - Array.prototype.indexOf
  // - Array.prototype.splice (pour supprimer), ex: todos.splice(5, 1)
  // et répondre en JSON la todos supprimé
});


app.listen(3000);
