const express = require('express');
const app = express();

app.use(express.json());

let users = [];

// GET
app.get('/users', (req, res) => {
  res.json(users);
});

// POST
app.post('/users', (req, res) => {
  const user = req.body;
  users.push(user);
  res.json(user);
});

// DELETE
app.delete('/users/:index', (req, res) => {
  const index = req.params.index;
  users.splice(index, 1);
  res.send('User removido');
});

app.listen(3000, () => {
  console.log('API rodando na porta 3000 🚀');
});
