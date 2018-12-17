var express = require('express');
var router = express.Router();

var OrderController = require('../controllers/OrderController');

router.get('/', (req, res, next) => {
    OrderController.getAll((_return) => {
        res.status(_return.code).send(_return.data);
    });
});

router.post('/newOrder', (req, res, next) => {
    OrderController.newOrder((_return) => {
        res.status(_return.code).send(_return.data);
    }, req.body);
});

module.exports = router;