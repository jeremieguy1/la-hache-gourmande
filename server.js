const express = require('express');
const app = express();
const path = require('path');

app.listen(process.env.PORT || 8080);

app.use(express.static(__dirname + '/dist/la-hache-gourmande'));


app.get('/', function(req, res) {
  if(req.url.includes("en")) {
    console.log('Sending en index ' + req.url);
    res.sendFile(path.join(__dirname + '/dist/la-hache-gourmande/en/index.html'));
  } else if (req.url.includes("fr")) {
    console.log('Sending fr index ' + req.url);
    res.sendFile(path.join(__dirname + '/dist/la-hache-gourmande/fr/index.html'));
  } else {
    console.log('Sending fr index default' + req.url);
    res.sendFile(path.join(__dirname + '/dist/la-hache-gourmande/fr/index.html'));
  }
})

app.get('/*', function(req, res) {
  if(req.url.includes("en")) {
    console.log('Sending en index /* ' + req.url);
    res.sendFile(path.join(__dirname + '/dist/la-hache-gourmande/en/index.html'));
  } else if (req.url.includes("fr")) {
    console.log('Sending fr index /* ' + req.url);
    res.sendFile(path.join(__dirname + '/dist/la-hache-gourmande/fr/index.html'));
  } else {
    console.log('Sending fr index default /* ' + req.url);
    res.sendFile(path.join(__dirname + '/dist/la-hache-gourmande/fr/index.html'));
  }
})

app.get('*', function(req, res) {
    console.log('Sending fr index * ' + req.url);
    res.sendFile(path.join(__dirname + '/dist/la-hache-gourmande/fr/index.html'));
})

console.log('Listening on ' + process.env.PORT || 8080)
