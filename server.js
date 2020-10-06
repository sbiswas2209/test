const express = require('express');
const app = express();
const port  = 5000;

app.get('/sample', function (req , res){
    console.log('Sample');
    res.send('Sample');
});

app.get('/' , function(req , res){
    //res.send('Started');
    res.sendFile(__dirname + '/pages/registration.html');
});

app.get('/register' , function(req,res){
    res.sendFile(__dirname + '/pages/registration.html');
});

app.get('/home' , function(req,res){
    console.log('Home');
    res.sendFile(__dirname + '/pages/homePage.html');
});

app.get('*' , function(req , res){
    res.send('Route not found');
});

app.listen(port , function(err){
    if(err) throw err;

    console.log(`Started on  : ${port}`);
});