/**
 * Variáveis necessáras para a aplicação
 */
var express = require('express');
var router = express.Router();

// GET
router.get('/', function(req, res, next) {
    res.send('Express RESTful API Tests');
});

module.exports = router;
