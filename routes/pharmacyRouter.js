var express = require('express');
var router = express.Router();

var PharmacyController = require('../controllers/PharmacyController');

router.get('/', (req, res, next) => {
    PharmacyController.getAll((_return) => {
        res.status(_return.code).send(_return.data);
    });
});

router.get('/:id', (req, res, next) => {
    PharmacyController.getByID((_return) => {
        res.status(_return.code).send(_return.data);
    }, req.params.id);
});

router.post('/newPharmacy', (req, res, next) => {
    PharmacyController.newPharmacy((_return) => {
        res.status(_return.code).send(_return.data);
    }, req.body);
});

router.delete('/:id', (req, res, next) => {
    PharmacyController.deletePharmacy((_return) => {
        res.status(_return.code).send(_return.data);
    }, req.params.id);
});

router.post('/editPharmacy', (req, res, next) => {
    PharmacyController.editPharmacy((_return) => {
        res.status(_return.code).send(_return.data);
    }, req.body);
});

router.get('/getRate/:id', (req, res, next) => {
    PharmacyController.getRate((_return) => {
        res.status(_return.code).send(_return.data);
    }, req.params.id);
});

router.post('/setRate', (req, res, next) => {
    PharmacyController.setRate((_return) => {
        res.status(_return.code).send(_return.data);
    }, req.body);
});

module.exports = router;