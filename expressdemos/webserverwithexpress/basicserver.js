var express = require('express'),
http=require('http');

var app=express().use(function(req,res,next){
    res.end('helloe express!');
});
http.createServer(app).listen(3000);