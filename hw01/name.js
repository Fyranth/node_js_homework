//лаб №1
/*const http = require('http');  
 
const server = http.createServer((request, response) => { 
    console.log("HTTP works!"); 
}); 
 
server.listen(8080);
*/

//Лаб №2
/*const http = require('http'); // подключение модуля 
 
http.createServer((request, response) => { // вызов метода создания http сервера  
    console.log("HTTP works!");  
    response.writeHead(200, {'Content-Type':'text/html'});  
    response.write('<h1>HEader 1</h1>');
    response.write('<h2>Header2</h2>');  
    response.end(); 
}).listen(8080); */


/*http.createServer((request, response) => {
    console.log("404 error");  
    response.writeHead(404, {'Content-Type':'text/html'});  
    response.write('<h1>Error 404</h1>');
    
    response.end();
}).listen(8080); */   

//Лаб №3
const http = require("http");
const fs = require("fs");
const server = new http.Server();
function sendResult(resultat, data) {
    resultat.write(data);
    resultat.end();
};

server.on('request', (request, resultat)=> {
    let head, body, footer;

    fs.readFile('head.html', (err, headData)=> {
        if(err) {
            resultat.writeHead(500);
            resultat.end();
        } else {
            head = headData;

            if(body && footer) {
                sendResult(resultat, head + body + footer);
            }
        }
    });

    fs.readFile('body.html', (err, bodyData)=> {
        if(err) {
            resultat.writeHead(500);
            resultat.end();
        } else {
            body = bodyData;

            if(head && footer) {
                sendResult(resultat, head + body + footer);
            }
        }
    });

    fs.readFile('footer.html', (err, footerData)=> {
        if(err) {
            resultat.writeHead(500);
            resultat.end();
        } else {
            footer = footerData;

            if(head && body) {
                sendResult(resultat, head + body + footer);
            }
        }
    });
});
server.listen(8080);