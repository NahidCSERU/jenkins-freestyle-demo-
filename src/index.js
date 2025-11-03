const express = require('express');
const { sum } = require('./math');

const app = express();

app.get('/sum', (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  res.json({ result: sum(a, b) });
  res.send('Hello API!');
});

if (require.main === module) {
  app.listen(3000, () => console.log('Server running on port 3000'));
}

module.exports = app;
