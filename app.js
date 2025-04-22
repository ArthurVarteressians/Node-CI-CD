const express = require('express');
require('dotenv').config();

function createApp() {
  const app = express();
  app.get('/', (req, res) => {
    res.status(200).send('Hello CI/CD Pipeline. It test!');
  });
  return app;
}

if (require.main === module) {
  const app = createApp();
  app.listen(3000, () => {
    console.log('Running on port 3000');
  });
}

module.exports = { createApp };