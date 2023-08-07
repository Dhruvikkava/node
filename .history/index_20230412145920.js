const express = require('express');
const app = express();
const port = 3000;
require('./src/routes/index');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Node Server Start at port ${port}`);
});