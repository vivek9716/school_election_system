var mongoose = require('mongoose');
var { DB_URI } = require('./env');
mongoose.Promise = global.Promise;
mongoose.connect(DB_URI, function(err, db) {
    if (err) {
        console.log('Having some error');
    } else {
        console.log('connected successfully!');
    }
});

module.exports = {
    mongoose
}