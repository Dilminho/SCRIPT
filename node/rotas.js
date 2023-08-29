const http = require('http');
var server = http.createServer(function(request, response){
    response.writeHead("100", {"Content-Type": "text/http"});
    if(request.url == "/"){
        response.write("<h1>Página Principal</h1>");
    }
    else if(request.url == "/bemvindo"){
        response.write("<h1>Bem Vindo</h1>");
    }
    else{
        response.write("<h1>Página não encontrado</h1>")
    }

    response.end();
})

const port = 3000;
server.listen(port, () =>{
    console.log(`Server execuntando em http://locallhost:${port}/`);
})