var User = require('../models/users');

exports.getAll = (callback) => {
    User.find((err, data) => {
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

exports.register = (callback, user) => {
    User.findOne({ username: user.username }, (err, data) => {
        if (err) {
            callback({
                "code" : 400,
                "data" : err
            });
        } else {
            if (data == null) {
                new User(user)
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
            } else {
                callback({
                    "code" : 200,
                    "data" : {
                        "message" : "Already Registered"
                    }
                });
            }
        }
    });
}

exports.login = (callback, user) => {
    User.findOne({ username: user.username }, (err, data) => {
        if (err) {
            callback({
                "code" : 400,
                "data" : err
            });
        } else {
            if (data == null) {
                callback({
                    "code" : 200,
                    "data" : {
                        "message" : "Not Registered"
                    }
                });
            } else {
                if (user.password == data.password) {
                    callback({
                        "code" : 200,
                        "data" : data
                    });
                } else {
                    callback({
                        "code" : 200,
                        "data" : "Incorrect Password"
                    });
                }
            }
        }
    });
}

exports.editUser = (callback, user) => {
    User.findByIdAndUpdate(user.id, user, (err, data) => {
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

exports.addSearch = (callback, searchItem, userID) => {
    User.findByIdAndUpdate(userID, { 
        $push: {
            searchWords: searchItem
        }
    },(err, data) => {
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

exports.getSearchHistpry = (callback, userID) => {
    User.findById(userID, (err, data) => {
        if (err) {
            callback({
                "code" : 400,
                "data" : err
            });
        } else {
            callback({
                "code" : 200,
                "data" : data.searchWords
            });
        }
    });
}

exports.clearSearchHistory = (callback, userID) => {
    User.findByIdAndUpdate(userID, {
        $set : { searchWords: [] }
    },(err, data) => {
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
