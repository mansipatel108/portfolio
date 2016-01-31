/// <reference path="_referance.ts" />
var express = require('express');
var path = require('path');
var app = express();
var port = process.env.port || 3000;
//home page
app.get('/', function (req, res, next) {
    // res.send('hello express!') 
    //res.sendfile('./Public/index.html')
    res.sendfile(path.join(__dirname, "Public", "home.html"));
});
//about page
app.get('/about', function (req, res) {
    //res.send('about page...') 
    res.sendfile(path.join(__dirname, "Public", "about.html"));
});
//services page
app.get('/services', function (req, res) {
    //res.send('services  page...') 
    res.sendfile(path.join(__dirname, "Public", "services.html"));
});
//projects page
app.get('/projects', function (req, res) {
    //res.send('projects page...') 
    res.sendfile(path.join(__dirname, "Public", "projects.html"));
});
//contact me page 
app.get('/contact_me', function (req, res) {
    //res.send('contact me  page...') 
    res.sendfile(path.join(__dirname, "Public", "contact_me.html"));
});
app.listen(port, function () {
    console.log("App started on port:" + port);
});
/*import http =  require('http');

var port:number = process.env.port || 3000;

var server:http.Server = http.createServer(
    function (req:http.ServerRequest, res:http.ServerResponse) {
    res.writeHead(200,{'Content-Type': 'text/plain'});
    res.end("hello node!!");
    
});

server.listen(port,function(){
    console.log("Server Started... listening on port:" + port);
});
*/ 
//# sourceMappingURL=server.js.map