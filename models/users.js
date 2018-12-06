var mongoose = require('mongoose');

const user = mongoose.Schema({
    name: String,
    username: String,
    password: String,
    isExternal: Boolean,
    email: String,
    mobile: String,
    birthDate: String,
    searchWords: [{
        word: String,
        date: String
    }]
});

module.exports = mongoose.model('User', user);