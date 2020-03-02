const express = require('express');
const app = express();
const path = require('path');
const { expressCspHeader, INLINE, NONE, SELF } = require('express-csp-header');

/*app.use((req, res, next) => {
    res.set({
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
        "Access-Control-Allow-Methods": "GET, POST, PATCH, DELETE, OPTIONS",
        "Content-Security-Policy": "default-src 'self'",
        "X-Content-Security-Policy": "default-src 'self'",
        "X-WebKit-CSP": "default-src 'self'"    
    })
    next();
});*/

const csp = require(`helmet-csp`)

app.use(csp({
    directives: {
      defaultSrc: [`'self'`],
      reportUri: `/api/csp/report`
    },
    reportOnly: true
  }))

app.use(express.static(__dirname + '/dist')); 

app.listen(process.env.PORT || 8080);

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

console.log('Listening')