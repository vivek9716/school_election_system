var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var { PORT } = require('./env');
var mongoose = require('./mongo-connect');
var user = require('./Model/user');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.send('Hello world!');
});

app.post('/register', function (req, res) {
    user.Register(req.body).then(response => {
        res.json(response);
    }).catch(error => {
        res.json(error);
    });    
});

app.listen(PORT, (req, res) => {
    console.log(`Sever is running on : ${PORT}`);
});