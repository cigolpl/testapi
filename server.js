'use strict';

const express = require('express');
const PORT = process.env.PORT || 4000;
const HOST = '0.0.0.0';
const Promise = require('bluebird');

const app = express();

app.get('/', async (req, res) => {

  if (req.query.delay) {
    await Promise.delay(req.query.delay);
  }

  res.json({
    info: 'Hello world'
  });
});

app.listen(PORT);
console.log(`Running on http://${HOST}:${PORT}`);
