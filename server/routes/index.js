let express = require('express');
let routes = express.Router();

routes.get('/', function(req, res) {
  res.send('Hello from foo');
});

routes.get('/hello', function(req, res) {
    res.send('Hello from foo');
});

module.exports = routes;