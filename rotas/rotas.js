const http = require('http');

const server = http.createServer(function(request, response){

    response.writeHead(200,{"content-type" : "text/html"});
    if(request.url == "/"){
        response.write("<h1>Página principal </h1>")
    }
    else if(ReadableStreamBYOBRequest.url == "/login"){
        response.write("<h1>Acesso ao login do projeto</h1>")
    }
    else{
        response.write("<h1>Página não encontrada</h1>")
    }
    response.end();
})

const port = 3000;
server.listen(port, () =>{
    console.log(`Server execuntando na porta ${port}`);
});