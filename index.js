// server.js
const express = require('express');
const app = express();
const port = 3000;

// Mock data for demonstration
const users = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }];

app.get('/users', (req, res) => {
  res.json(users);
});

app.get('/add', (req, res) => {
  const { num1, num2 } = req.query;

  if (num1 && num2) {
    const sum = Number(num1) + Number(num2);
    res.json({ result: sum });
  } else {
    res.status(400).json({ error: 'Please provide both num1 and num2 parameters' });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

module.exports = app