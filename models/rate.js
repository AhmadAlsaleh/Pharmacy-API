var mongoose = require('mongoose');

const rate = mongoose.Schema({
    userID: String,
    rateNumber: Number,
    pharmacyID: String
});

module.exports = mongoose.model('Rate', rate);