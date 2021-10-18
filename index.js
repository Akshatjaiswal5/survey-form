var express = require('express');
const path = require('path');
var app = express();
app.use(express.json());

app.get('/', function(req, res) {
   res.sendFile(path.join(__dirname, '/index.html'));
 });

app.get('/index.css', function(req, res) {
   res.sendFile(path.join(__dirname, '/index.css'));
 });

app.get('/index.js', function(req, res) {
   res.sendFile(path.join(__dirname, '/index.js'));
 });

app.post('/', function(req, res) {
  console.log(req.body);
 });

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})