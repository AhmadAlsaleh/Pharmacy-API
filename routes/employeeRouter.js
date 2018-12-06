var express = require('express');
var router = express.Router();

var EmployeeController = require('../controllers/EmployeeController');

router.get('/', (req, res, next) => {
    EmployeeController.getAll((_return) => {
        res.status(_return.code).send(_return.data);
    });
});

router.get('/:id', (req, res, next) => {
    EmployeeController.getByID((_return) => {
        res.status(_return.code).send(_return.data);
    }, req.params.id);
});

router.post('/newEmployee', (req, res, next) => {
    EmployeeController.newEmployee((_return) => {
        res.status(_return.code).send(_return.data);
    }, req.body);
});

module.exports = router;