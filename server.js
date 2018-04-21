var express = require('express');
var app = express();

var port = process.env.port || 3000;

app.get('/', function (req, res) {
    res.send('Hello world!');
});

app.listen(port, (req, res) => {
    console.log(`Sever is running on : ${port}`);
});

//mongodb://vivek.chaudhary:vivek@1989@ds253889.mlab.com:53889/school_election_system