var express = require('express');
var app = express();
var hostname = 'localhost';
var port = 8017;
app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1><hr>');
});
app.listen(port, hostname, () => {
    console.log(`Hello Luong Ba, I am running at ${ hostname }:${ port }/`);
});
