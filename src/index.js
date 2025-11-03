const express = require('express');
const { sum } = require('./math');

const app = express();

// Root route - custom text/HTML
app.get('/', (req, res) => {
  res.send('<h1>Welcome to My Node.js App!</h1><p>This is a custom homepage.</p>');
});

app.get('/sum', (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  res.json({ result: sum(a, b) });
});

if (require.main === module) {
  app.listen(3000, () => console.log('Server running on port 3000'));
}

module.exports = app;
