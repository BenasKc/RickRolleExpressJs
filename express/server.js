'use strict';
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();
router.get('/', (req, res) => {
  res.redirect('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
});
router.post('/', (req, res) => res.redirect('https://www.youtube.com/watch?v=dQw4w9WgXcQ'););

app.use(bodyParser.json());
app.use('/.netlify/functions/server', router);
app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));

module.exports = app;
module.exports.handler = serverless(app);
