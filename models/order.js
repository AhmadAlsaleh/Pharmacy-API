var mongoose = require('mongoose');

const order = mongoose.Schema({
    image: String,
    dateTime: String,
    lat: Number,
    lng: Number,
    userID: String,
    fromTime: String,
    toTime: String,
    name: String,
    phone: String,
    remark: String
});

module.exports = mongoose.model('Order', order);