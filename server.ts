/// <reference path="_referance.ts" />
import express = require('express');
import path = require('path');

var app:express.Express = express();

var port:number = process.env.port || 3000;

app.get('/',function(req:express.Request, res:express.Response, next:any){
  // res.send('hello express!') 
  //res.sendfile('./Public/index.html')
  res.sendfile(path.join(__dirname,"Public","index.html"));
});

//info page
app.get('/info',function(req:express.Request, res:express.Response){
   //res.send('custom info page...') 
   res.sendfile(path.join(__dirname,"Public","info.html"));
});


app.listen(port, function(){
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