var mongoose = require('mongoose');

const pharmacy = mongoose.Schema({
    name: String,
    phone: String,
    mobile: String,
    address: String,
    lat: Number,
    lng: Number,
    openFromTo: String,
    alternationDateTime: String,
    ownerName: String,
    employees: [String],
    username: String,
    password: String
});

module.exports = mongoose.model('Pharmacy', pharmacy);