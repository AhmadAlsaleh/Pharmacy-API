var Order = require('../models/order');
var base64ToImage = require('base64-to-image');
var fs = require('fs');

exports.getAll = (callback) => {
    Order.find((err, data) => {
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

exports.getByID = (callback, _id) => {
    Order.findById(_id, (err, data) => {
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

exports.newOrder = (callback, orderObject) => {
    var dir = './public/images/' + orderObject.userID + "/";
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
    var base64Str = orderObject.image;
    var path=dir;
    var imageName = orderObject.userID + "-" + new Date();
    var optionalObj = {'fileName': imageName, 'type':'jpg'};
    base64ToImage(base64Str, path, optionalObj);
    var order = orderObject;
    order.image = orderObject.userID + "/" + imageName + ".jpg";
    new Order(order)
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

exports.deleteOrder = (callback, id) => {
    Order.findByIdAndDelete(id, (err, data) => {
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

exports.editOrder = (callback, order) => {
    Order.findByIdAndUpdate(order.id, order, (err, data) => {
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