// server.js
const express = require('express');
const app = express();
const port = 3000;

// Mock data for demonstration
const users = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }];

app.get('/users', (req, res) => {
  res.json(users);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

module.exports = app