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

app.get('/api/todos', (req, res) => {
  res.json(todos);
});

app.listen(3000);
