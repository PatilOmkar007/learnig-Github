const http=require('http');
http.createServer((req,resp)=>{
    resp.writeHead(200,{'Content-Type':'application\json'});
    resp.write("{name:'omkar',email:'omkar@omkar'}");
    //JSON.stringify()
    resp.end();
}).listen(5656);