var mongoose = require('mongoose');

const employee = mongoose.Schema({
    name: String,
    mobile: String,
    phone: String,
    address: String
});

module.exports = mongoose.model('Emoloyee', employee);