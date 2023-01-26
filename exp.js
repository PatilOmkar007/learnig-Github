const express = require('express');
const app=express();

app.get('',(req,resp)=>{
    resp.send('hello, <b>'+req.query.name+'</b> u r on home page');

})
app.get('/about',(req,resp)=>{

    resp.send('<h1>hello u r on about page<br> I am Omkar</h1>');

})
app.listen(4600);