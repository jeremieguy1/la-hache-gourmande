const express = require('express');
const app = express();
const path = require('path');
var router = express.Router();

app.listen(process.env.PORT || 8080);

app.use(express.static(__dirname + '/dist/la-hache-gourmande'));
app.use(express.static(__dirname + '/dist/la-hache-gourmande/en'));
app.use(express.static(__dirname + '/dist/la-hache-gourmande/fr'));

router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
  });
  // define the home page route
  router.get('/en/*', function(req, res) {
    console.log("EN : " + __dirname)
    // res.sendFile(path.join(__dirname + '/dist/la-hache-gourmande/en/index.html'));
  });
  // define the about route
  router.get('/fr/*', function(req, res) {
    console.log("FR : "+ __dirname)
    res.sendFile(path.join(__dirname + '/dist/la-hache-gourmande/fr/index.html'));
  });

  // define the about route
  router.get('/*', function(req, res) {
    console.log("FR : "+ __dirname)
    res.sendFile(path.join(__dirname + '/dist/la-hache-gourmande/fr/index.html'));
  });

    module.exports = router;


console.log('Listening on ' + process.env.PORT || 8080)
