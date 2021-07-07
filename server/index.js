const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const route = require('./routes.js');
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// app.use(express.static(__dirname + '/../client/dist'));
app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));
app.use('/', route)

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});