const express = require('express');
const app = express();
const path = require('path');
var router = express.Router();

app.listen(process.env.PORT || 8080);

app.use(express.static(__dirname + '/dist/la-hache-gourmande'));
app.use(express.static(__dirname + '/dist/la-hache-gourmande/en'));
app.use(express.static(__dirname + '/dist/la-hache-gourmande/fr'));

app.get('/en/*', function(req, res) {
  req.baseUrl
  console.log('Sending index for EN : ' + req.baseUrl);
  res.sendFile(path.join(__dirname + '/dist/la-hache-gourmande/en/index.html'));
})

app.get('/fr/*', function(req, res) {
  console.log('Sending index for FR');
  res.sendFile(path.join(__dirname + '/dist/la-hache-gourmande/fr/index.html'));
})

app.get('/*', function(req, res) {
  console.log('Sending index FR by default');
  res.sendFile(path.join(__dirname + '/dist/la-hache-gourmande/fr/index.html'));
})

console.log('Listening on ' + process.env.PORT || 8080)
