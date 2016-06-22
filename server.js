var express = require('express');
var http = require('http');
var port = process.env.NODE_ENV == 'p' ? 80 : 4000;

var app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views/');
app.use(express.static(__dirname + '/public'));

app.get('*', function (req, res) {
    res.render('layout', {
        title: 'rev76'
    });
});

app.listen(port, function () {
    console.log('server listening on port', port);
});