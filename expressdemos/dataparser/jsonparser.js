var express =require('express');
var bodyParser= require('body-parser');
 var app=express()

 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({
   extended: true
 }))
.use(function(req,res){
    if(req.body.foo){
        res.end('body parsed ! value of foo:' +req.body.foo);
    }else{
        res.end('body does not have foo !')
    }
}).use(function(err,req,res,next){
    res.end('invalide body !');
}).listen(3000);