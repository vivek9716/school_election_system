var express = require('express');
var app = express();
var mongoose = require('mongoose');

mongoose.connect(process.env.APP_MONGODB, function(err, db) {
    if (err) {
        console.log('Having some error');
    } else {
        console.log('connected successfully!');
    }
});

var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.send('Hello world!');
});

app.listen(port, (req, res) => {
    console.log(`Sever is running on : ${port}`);
});

//mongodb://vivek.chaudhary:vivek@1989@ds253889.mlab.com:53889/school_election_system