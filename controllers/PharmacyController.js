var Pharmacy = require('../models/pharmacy');
var Rate = require('../models/rate');

exports.getAll = ((callback) => {
    Pharmacy.find((err, data) => {
        if (err) {
            callback({
                "code" : 400,
                "data" : err
            });
        } else {
            callback({
                "code" : 200,
                "data" : data
            });
        }
    });
});

exports.getByID = ((callback, id) => {
    Pharmacy.findById(id, (err, data) => {
        if (err) {
            callback({
                "code" : 400,
                "data" : err
            });
        } else {
            callback({
                "code" : 200,
                "data" : data
            });
        }
    });
});

exports.newPharmacy = ((callback, pharmacy) => {
    new Pharmacy(pharmacy)
    .save()
    .then(done => {
        callback({
            "code" : 200,
            "data" : done
        });
    })
    .catch(err => {
        callback({
            "code" : 400,
            "data" : err
        });
    });
});

exports.deletePharmacy = (callback, id) => {
    Pharmacy.findByIdAndDelete(id, (err, data) => {
        if (err) {
            callback({
                "code" : 400,
                "data" : err
            });
        } else {
            callback({
                "code" : 200,
                "data" : data
            });
        }
    });
};

exports.editPharmacy = (callback, pharmacy) => {
    Pharmacy.findByIdAndUpdate(pharmacy.id, pharmacy, (err, data) => {
        if (err) {
            callback({
                "code" : 400,
                "data" : err
            });
        } else {
            callback({
                "code" : 200,
                "data" : data
            });
        }
    });
};

exports.login = (callback, loginData) => {
    Pharmacy.findOne({ username: loginData.username, password: loginData.password }, (err, data) => {
        if (err) {
            callback({
                "code" : 400,
                "data" : err
            });
            return;
        }
        if (data == null) {
            callback({
                "code" : 200,
                "data" : {
                    "message" : "Check Input"
                }
            });
        } else {
            callback({
                "code" : 200,
                "data" : data
            });
        }
    });
}

exports.getRate = (callback, id) => {
    Rate.find({ pharmacyID: id }, (err, data) => {
        if (err) {
            callback({
                "code" : 400,
                "data" : err
            });
        } else {
            var count = data.length;
            var sum = 0;
            for (d in data) {
                sum += d.rateNumber;
            }
            callback({
                "code" : 200,
                "data" : {
                    "count" : count,
                    "rate" : (sum / count)
                }
            });
        }
    });
}

exports.setRate = (callback, rateData) => {
    Rate.findOne({ userID : rateData.userID, pharmacyID : rateData.pharmacyID }, (err, data) => {
        if (err) {
            callback({
                "code" : 400,
                "data" : err
            });
            return;
        }

        if (data == null) {
            new Rate(rateData)
            .save()
            .then(done => {
                callback({
                    "code" : 200,
                    "date" : done
                });
            })
            .catch(err => {
                callback({
                    "code" : 400,
                    "data" : err
                });
            });
        } else {
            Rate.updateOne({ userID : rateData.userID, pharmacyID : rateData.pharmacyID }, rateData, (err, data) => {
                if (err) {
                    callback({
                        "code" : 400,
                        "data" : err
                    });
                } else {
                    callback({
                        "code" : 200,
                        "data" : data
                    });
                }
            });
        }

    });
}
