var express = require('express');
var router = express.Router();

var UserController = require('../controllers/UserController');

router.get('/', (req, res, next) => {
    UserController.getAll((_return) => {
        res.status(_return.code).send(_return.data);
    });
});

router.post('/register', (req, res, next) => {
    UserController.register((_return) => {
        res.status(_return.code).send(_return.data);
    }, req.body);
});

router.post('/login', (req, res, next) => {
    UserController.login((_return) => {
        res.status(_return.code).send(_return.data);
    }, req.body);
});

router.post('/edit', (req, res, next) => {
    UserController.editUser((_return) => {
        res.status(_return.code).send(_return.data);
    }, req.body);
});

router.post('/addSearch/:id', (req, res, next) => {
    UserController.addSearch((_return) => {
        res.status(_return.code).send(_return.data);
    }, req.body, req.params.id);
});

router.get('/getSearchHistpry/:id', (req, res, next) => {
    UserController.getSearchHistpry((_return) => {
        res.status(_return.code).send(_return.data);
    }, req.params.id);
});

router.delete('/clearSearchHistory/:id', (req, res, next) => {
    UserController.clearSearchHistory((_return) => {
        res.status(_return.code).send(_return.data);
    }, req.params.id);
});

module.exports = router;
