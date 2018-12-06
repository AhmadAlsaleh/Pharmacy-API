var Employee = require('../models/employees');

exports.getAll = (callback) => {

    Employee.find((err, data) => {
        var _data = {};
        if (err) {
            _data = {
                "code": 400,
                "data" : err
            }
        } else {
            _data = {
                "code" : 200,
                "data" : data
            };
        }
        callback(_data);
    });
}

exports.getByID = (callback, id) => {
    Employee.findById(id, (err, data) => {
        var _data = {};
        if (err) {
            _data = {
                "code": 400,
                "data" : err
            }
        } else {
            _data = {
                "code" : 200,
                "data" : data
            };
        }
        callback(_data);
    });
}

exports.newEmployee = (callback, emp) => {
    new Employee(emp)
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
}
