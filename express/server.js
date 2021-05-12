'use strict';
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();
router.get('/', (req, res) => {
  res.redirect('/.netlify/functions/server');
  res.end();
});
router.get('/another', (req, res) => res.redirect('/.netlify/functions/server'));
router.post('/', (req, res) => res.redirect('/.netlify/functions/server');
  res.end(););

app.use(bodyParser.json());
app.use('/.netlify/functions/server', router);

module.exports = app;
module.exports.handler = serverless(app);
